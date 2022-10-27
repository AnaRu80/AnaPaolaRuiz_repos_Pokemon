/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from "enzyme"
import { NavigationButtons } from "../app/components"


describe("Rendering Navigation Buttons", () => {
    it("Have a 2 TouchableOpacity render", () => {
        const wrapper = shallow(<NavigationButtons />)
        const buttons = wrapper.find("TouchableOpacity")
        expect(buttons).toHaveLength(2)
    })
})

it('Test primary button event', () => {
    const mockOnPressPrimary = jest.fn();
    const wrapper = shallow(<NavigationButtons onPressPrimary={mockOnPressPrimary} />);
    console.log("wrapper", wrapper.debug())
    wrapper.find("TouchableOpacity").first().simulate('press');
    expect(mockOnPressPrimary.mock.calls.length).toEqual(1);
});

it('Test secondary button event', () => {
    const mockOnPressSecondary = jest.fn();
    const wrapper = shallow(<NavigationButtons onPressSecondary={mockOnPressSecondary} />);
    console.log("wrapper", wrapper.debug())
    wrapper.find("TouchableOpacity").at(1).simulate('press');
    expect(mockOnPressSecondary.mock.calls.length).toEqual(1);
});