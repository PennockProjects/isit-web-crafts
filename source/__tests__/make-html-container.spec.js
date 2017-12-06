import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'make-html-container.spec');

import MakeHtmlContainer from '../containers/MakeHtmlContainer';
import MenuItem from 'material-ui/MenuItem';
import PairedDropDowns from '../controls/PairedDropDowns';
import RaisedButton from "material-ui/RaisedButton";
import PreObjectKeys from '../controls/PreObjectKeys';
import NavButtons from '../controls/NavButtons';

describe("WebCrafts make-html-container test", () => {

    it('renders default value of H1 tag when prop configLoading=2', () => {
        const wrapper = shallow(<MakeHtmlContainer configLoading={2} />);
        const h1 = <h1>Make Html</h1>;
        elfDebugEnzyme.getAll(wrapper, true);
        expect(wrapper.contains(h1)).toEqual(true);
    });

    it('renders loading... when prop configLoading=1', () => {
        const wrapper = shallow(<MakeHtmlContainer configLoading={1} />);
        const h1 = <h1>Loading...</h1>;
        elfDebugEnzyme.getAll(wrapper, true);
        expect(wrapper.contains(h1)).toEqual(true);
    });

    it('contains PairedDropDowns, RaisedButton, PreObjectKeys, and NavButtons components', () => {
        const wrapper = shallow(<MakeHtmlContainer configLoading={2} />);

        const matchingElementsArray = [
            <PairedDropDowns/>,
            <RaisedButton/>,
            <PreObjectKeys/>,
            <NavButtons/>
        ];
        elfDebugEnzyme.getAll(wrapper, true);
        expect(wrapper.containsAnyMatchingElements(matchingElementsArray));
    });

    // it('gets drop down value', () => {
    //     const wrapper = shallow(<MakeHtmlContainer configLoading={2} />);
    //     //elfDebugEnzyme.getAll(wrapper, true);
    //     elfDebugEnzyme.getLast(wrapper, 'MenuItem', true);
    //     const code = <MenuItem primaryText='/home/charlie/Git/CloudNotes/Isit320/'/>;
    //     expect(wrapper.containsMatchingElement(code)).toBe(true);
    // });
    //
    // it('renders button click message for last pre tag', () => {
    //     const wrapper = shallow(<MakeHtmlContainer configLoading={2} />);
    //     wrapper.find('#generate').simulate('click');
    //     elfDebugEnzyme.getLast(wrapper, 'pre', true);
    //     const paragraphData = wrapper.find('pre').last().debug();
    //     expect(paragraphData).toContain('/home/charlie/Git/CloudNotes/tips');
    // });

});
