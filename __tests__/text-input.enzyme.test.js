/**
 * @jest-environment jsdom
 */
import React from 'react';

import { shallow, render, mount, } from "enzyme"
import { NavigationButtons } from "../app/components"
import TextInput from "../app/components/TextInput";
import renderer from "react-test-renderer"


import { PokedexScreen } from "../app/screens"
import PokemonsList from '../app/screens/pokedex/components/pokemons-list';
describe("Rendering TextInput", () => {

    xit("Have a TextInput render", () => {
        const wrapper = shallow(<TextInput />)
        const textinput = wrapper.find("TextInput")
        console.log("wrapper", wrapper.debug())

        expect(textinput).toHaveLength(1)
    })

    xit("should change state input search", async () => {
        const wrapper = mount(<TextInput />)
        const inst = wrapper.find("TextInput")
        inst.prop('onSearch')
        // const inst = instanceOf.getInstance();

        console.log("instance", inst)
        // wrapper.find("#search-input").simulate('change',
        //     { target: { value: 50 } }
        // );
        //  expect(wrapper.state('firstNumber')).toEqual(50);
        //  expect(wrapper.state('secondNumber')).toEqual('');
        // expect(instanceOf.type).toBeTruthly()
        // instanceOf.children.onChangetext("42")
        // expect(wrapper.state).toEqual("42")
        // const onSearch = jest.fn();
        // const textinput = wrapper
        //     .find("[testID='TitlePokedex']")
        //     .simulate('change', "42")
        // console.log("rext", wrapper.debug())
        // expect(textinput).toEqual('42')
        // expect(instanceOf.props.value).toHaveBeenCalledWith('42');

    })

})