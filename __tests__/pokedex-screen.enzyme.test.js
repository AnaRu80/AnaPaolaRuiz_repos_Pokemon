/**
 * @jest-environment jsdom
 */


import 'react-native';
import React from 'react';
import { PokedexScreen } from "../app/screens"
import { shallow } from "enzyme"
import { TextInput, NavigationButtons } from "../app/components"
import PokemonsList from '../app/screens/pokedex/components/pokemons-list';


describe('Rendering Pokedex Component', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<PokedexScreen />) })

  it('should render Title of Screen', () => {

    const text = wrapper.find("[testID='TitlePokedex']").dive().text();
    expect(text).toEqual('Pokemons');
  });
  it('should render TextInput', () => {
    const name = wrapper.containsMatchingElement(<TextInput />)
    expect(name).toBeTruthy()

  });
  it('should render Pokemons List', () => {
    const name = wrapper.containsMatchingElement(<PokemonsList />)
    expect(name).toBeTruthy()

  });
  it('should render Pokemons List', () => {
    const name = wrapper.containsMatchingElement(<PokemonsList />)
    expect(name).toBeTruthy()

  });
  it('should render The Buttons Navigation between screens', () => {
    const name = wrapper.containsMatchingElement(<NavigationButtons />)
    expect(name).toBeTruthy()
  });

});




// const app = shallow(<PokedexScreen />);
// const text = app.find("[testID='rectangleLengthText']").dive().text();
// expect(text).toEqual('Length');