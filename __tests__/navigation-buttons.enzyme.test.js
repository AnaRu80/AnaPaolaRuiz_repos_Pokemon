/**
 * @jest-environment jsdom
 */

import React from 'react';

import { shallow, render, mount, } from "enzyme"
import { NavigationButtons } from "../app/components"
// import { NavigationButtons } from '../app/components/navigation-buttons';
import TextInput from "../app/components/TextInput";
import renderer from "react-test-renderer"
import { PokedexScreen } from '../app/screens';
// import { waitForElement } from 'react-native-testing-library';


describe("Rendering Navigation Buttons", () => {

    it("Have a TextInput render", () => {
        const wrapper = shallow(<NavigationButtons />)
        const buttons = wrapper.find("TouchableOpacity")

        expect(buttons).toHaveLength(2)
    })
})

xit('call setCount -1', () => {

    const onPressMock = jest.fn();
    const wrapper = renderer.create(<NavigationButtons />).getInstance();
    // const wrapper = mount(React.cloneElement(<NavigationButtons />), { attachTo: document.getElementById('container') });
    console.log("wrapper", wrapper)
    // const button = shallow((<NavigationButtons />));
    // const addTodoButton = button.find('TouchableOpacity').at(0).simulate('click');
    // addTodoButton.props().onPress()
    // expect(onPressMock).toHaveBeenCalled();
    // expect(onPressMock.mock.calls.length).toEqual(1);


    // const mockedHandleClickSubtract = jest.fn();
    // wrapper.instance().handleBack = mockedHandleClickSubtract;
    // wrapper.find('TouchableOpacity').at(0).props().onClick();
    // expect(mockedHandleClickSubtract).toHaveBeenCalledTimes(1);
});