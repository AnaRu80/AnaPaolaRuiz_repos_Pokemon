/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, render, mount, } from "enzyme"
import { TextInput } from "../app/components"


describe("Rendering TextInput", () => {

    it("Have a TextInput render", () => {
        const wrapper = shallow(<TextInput />)
        const textinput = wrapper.find("TextInput")
        expect(textinput).toHaveLength(1)
    })
    it("Have a TextInput change Text", () => {
        const onSearch = jest.fn();
        const wrapper = shallow(<TextInput onSearchFilter={onSearch} />);
        wrapper.find('TextInput').simulate('changeText', 'test search text');
        expect(onSearch).toHaveBeenCalledWith('test search text');
    })



})