import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'paired-drop-downs-spec');

import PairedDropDowns from '../controls/PairedDropDowns';

describe('PairedDropDowns Tests', () => {

    it("Left drop changes value to 0", () => {

        const leftArray = ["left_zero", "left_one"];
        const rightArray = ["right_zero", "right_one"];

        const changeLeft = () => {
        };

        const changeRight = () => {
        };

        const wrapper = shallow(<PairedDropDowns
            pairArrayLeft={leftArray}
            pairArrayRight={rightArray}
            value={0}
            onChangeLeft={changeLeft}
            onChangeRight={changeRight}
        />);

        wrapper.find('DropDownMenu').first().simulate('change', {target: { value : "1"}});
        //elfDebugEnzyme.getFirst(wrapper, 'DropDownMenu', true);

        expect(wrapper.find('DropDownMenu').first().props().value).toBe(0);
    });

    it("Left drop down calls changeLeft", (done) => {

        const leftArray = ["left_zero", "left_one"];
        const rightArray = ["right_zero", "right_one"];

        const changeLeft = (changeProps) => {
            console.log("changeLeft");
            console.log(changeProps);
            //expect(changeProps.value).toBe(1);
            // expect(changeProps.destDir).toBe("left_one");
            done();
        };

        const changeRight = () => {
            console.log("changeRight should not have been called");
            // nop
        };

        const wrapper = mount(<PairedDropDowns
            pairArrayLeft={leftArray}
            pairArrayRight={rightArray}
            value={1}
            onChangeLeft={changeLeft}
            onChangeRight={changeRight}
        />);

        wrapper.find('DropDownMenu').first().simulate('change',{target: { value : '1', destDir: "leftDestDir"}});
    });

    it("Right drop down calls changeRight", (done) => {

        const leftArray = ["left_zero", "left_one"];
        const rightArray = ["right_zero", "right_one"];

        const changeLeft = (changeProps) => {
            console.log("changeLeft not to have been called");
            console.log(changeProps);
        };

        const changeRight = (changeProps) => {
            console.log("changeRight");
            console.log(changeProps);
            done()
        };

        const wrapper = mount(<PairedDropDowns
            pairArrayLeft={leftArray}
            pairArrayRight={rightArray}
            value={1}
            onChangeLeft={changeLeft}
            onChangeRight={changeRight}
        />);

        wrapper.find('DropDownMenu').last().simulate('change',{target: { value : '0', "destDir": "destDir"}});
    });
});
