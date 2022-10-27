import { StyleSheet, View, Modal as ReactNativeModal, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useApi } from '../hooks/useApi'
import { Text } from '../components'
import { getColorType } from '../utils/utils'

export function Modal(props) {
  const { getPokemonDetails, pokemonDetails } = useApi()
  const { pokemonId, onClose } = props

  useEffect(() => {
    pokemonId && getPokemonDetails(pokemonId)
  }, [pokemonId])

  const { name, image, movements, type: pokemonTypes, weight, sprites } = pokemonDetails || {}
  const styleType = pokemonTypes ? getColorType(pokemonTypes[0]) : "#808080aa"
  const types = pokemonTypes ? pokemonTypes.join(", ") : ""
  const moves = movements ? movements.join(", ") : ""
  const spritesType = sprites && Object.values(sprites).filter(sprite => typeof sprite === "string")

  return (
    <ReactNativeModal>
      <View onPress={() => onClose()} style={[styles.container, { backgroundColor: styleType }]}>

        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => onClose()} style={styles.closeContainer} >
            <Text style={styles.title} text={"X"} />
          </TouchableOpacity>

          <View style={styles.contentContainer}>

            <View style={styles.titleContainer}>
              {image && <Image style={styles.image} source={{ uri: image }} />}
              <Text style={styles.title} text={"#" + pokemonId} />
              <Text text={name} />
            </View>

            <Text style={styles.title} text={"Types"} />
            <Text style={styles.text} text={types} />
            <Text style={styles.title} text={"Weight"} />
            <Text style={styles.text} text={weight} />
            <Text style={styles.title} text={"Sprites"} />

            {sprites &&
              <View style={styles.spritesContainer}>
                {spritesType.map(sprite =>
                  <Image style={styles.image} source={{ uri: sprite }} />
                )}
              </View>
            }
            <Text style={styles.title} text={"Movements"} />
            <Text text={moves} style={styles.text} />
          </View>

        </View>
      </View>
    </ReactNativeModal >

  )
}

const styles = StyleSheet.create({

  image: {
    width: 30,
    height: 30,
    borderRadius: 35,
  },
  text: {
    fontSize: 14
  },
  title: {
    fontWeight: 'bold'
  },
  container: { flex: 1, justifyContent: 'center' },
  modalContainer: { backgroundColor: "white", borderRadius: 9, alignSelf: 'center', width: "89%", justifyContent: "center", alignItems: "center" },
  closeContainer: { marginRight: 10, marginTop: 10, alignSelf: "flex-end" },
  spritesContainer: { flexDirection: "row", flexWrap: "wrap" },
  contentContainer: { justifyContent: "center", alignContent: "center", alignItems: "flex-start", width: "90%" },
  titleContainer: { alignSelf: "center" }
});
