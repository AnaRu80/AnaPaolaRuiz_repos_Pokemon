/**
 * @jest-environment jsdom
 */


import 'react-native';
import React from 'react';
import PokedexScreen from "../app/screens/pokedex-screen"
import { shallow } from "enzyme"
import { TextInput, NavigationButtons } from "../app/components"
import ListItem from "../app/components/lists"
import { FlatList } from 'react-native';
jest.mock("react-native/Libraries/Utilities/Platform")


describe('Rendering Pokedex Component', () => {

  let wrapper;
  beforeEach(() => { wrapper = shallow(<PokedexScreen />) })

  it('should render TextInput', () => {
    const name = wrapper.containsMatchingElement(<TextInput />)
    expect(name).toBeTruthy()

  });

  it('should render Pokemons List', () => {
    const name = wrapper.containsMatchingElement(<FlatList />)
    expect(name).toBeTruthy()

  });
  xit('should render Pokemons Item', () => {
    const wrapper = shallow(<ListItem {...defaultProps} />);
    const flatList = wrapper.find('FlatList');

    const item = flatList.renderProp('renderItem')({ item: yourData });
    expect(item).toMatchSnapshot();

  });
  it('should render The Buttons Navigation between screens', () => {
    const name = wrapper.containsMatchingElement(<NavigationButtons />)
    expect(name).toBeTruthy()
  });

});
