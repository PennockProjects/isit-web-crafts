import React from 'react';
import ReactDOM from 'react-dom';

import ReactHome from '../ReactHome';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import ElfDebugEnzyme from "../ElfDebugEnzyme";
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'react-home.spec');


describe('React Home Tests', () => {

    it('expects true to be true', () => {
        expect(true).toBe(true);
    });

    it("renders default value of H1 tag", () => {
        const wrapper = shallow(<ReactHome/>);

        const nineSign = <h1>Webcraft Home Page</h1>;
        elfDebugEnzyme.getLast(wrapper, 'h1', true);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

});