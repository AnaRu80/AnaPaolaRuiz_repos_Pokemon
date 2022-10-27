import { useState, useEffect } from "react";

export const useSearch = (pokemonData) => {
  const [search, setSearch] = useState('');
  const [filteredPokemonData, setFilteredPokemonData] = useState([]);
  const [fullPokemonData, setFullPokemonData] = useState([]);

  useEffect(() => {
    setFullPokemonData(pokemonData)
    setFilteredPokemonData(pokemonData)

  }, [pokemonData])

  const onSearchFilter = (text) => {
    if (text) {
      const newData =
        fullPokemonData.filter(item => {
          const itemData = item.name
            ? item.name.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();

          return itemData.indexOf(textData) > -1;
        });
      setFilteredPokemonData(newData);
      setSearch(text);
    } else {
      setFilteredPokemonData(fullPokemonData);
      setSearch(text);
    }
  };
  return { search, filteredPokemonData, onSearchFilter }
}