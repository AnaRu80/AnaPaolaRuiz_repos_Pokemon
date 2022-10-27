import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { NavigationButtons, TextInput, Modal } from "../components"
import { ListItem } from '../components/lists';
import { useApi } from '../hooks/useApi';
import { getPokemonId } from "../utils/utils"
import { useSearch } from '../hooks/useSearch';


export default function PokedexScreen() {
  const { pokemonData, loading, error, request } = useApi()
  const { filteredPokemonData, search, onSearchFilter } = useSearch(pokemonData)
  const [pokemonSelected, setPokemonSelected] = useState("")
  const [offset, setoffset] = useState(0)
  const [isModalOpen, setisModalOpen] = useState(false)


  useEffect(() => {
    request(`https://pokeapi.co/api/v2/pokemon?limit=6&offset=0`)
  }, [])
  useEffect(() => {
    request(`https://pokeapi.co/api/v2/pokemon?limit=6&offset=${6 * offset}`)
  }, [offset])

  const openModal = (pokemonId) => {
    setPokemonSelected(pokemonId)
    setisModalOpen(true)
  }

  const pageOffset = (isDecrease) => {
    isDecrease ? setoffset(offset + 1) : offset > 0 && setoffset(offset - 1)
  }
  return (
    <>
      <View style={styles.container}>
        <TextInput onSearchFilter={(text) => onSearchFilter(text)} />
        <View style={styles.listContainer}>
          <FlatList
            data={filteredPokemonData}
            keyExtractor={item => item.url}
            ItemSeparatorComponent={<View />}
            style={{ width: "100%" }}
            horizontal={false}
            numColumns={2}
            renderItem={({ item }) =>
              <View style={styles.itemContainer}>
                <ListItem name={item.name}
                  pokemonId={getPokemonId(item.url)}
                  image={item.image}
                  onPress={() => openModal(getPokemonId(item.url))} />
              </View>
            }
          />
        </View>
        <View >
          <NavigationButtons
            textPrimary={"previous"}
            textSecondary={"next"}
            onPressSecondary={() => pageOffset(true)} onPressPrimary={() => pageOffset(false)} />
        </View>
      </View>
      {isModalOpen && <Modal pokemonId={pokemonSelected} onClose={() => setisModalOpen(false)} />}
    </>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: "white",
    flex: 1,
    paddingBottom: 30,

  },
  listContainer: {
    alignItems: 'center', justifyContent: 'center', flex: 3, paddingHorizontal: 8
  },
  itemContainer: { flex: 1, padding: 4 }
});

