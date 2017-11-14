import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'make-html');

import MakeHtml from '../MakeHtml';
import MakeHtmlContainer from '../container/MakeHtmlContainer';

describe('React Home Tests', () => {
    it('proves that MakeHtmlContainer is part of the MakeHtml page', () => {
        const wrapper = shallow(<MakeHtml />);
        const makeHtmlContainerArray = [<MakeHtmlContainer/>];
        elfDebugEnzyme.getAll(wrapper, true);
        //expect(wrapper.contains(makeHtmlContainer)).toEqual(true);
        expect(wrapper.containsAnyMatchingElements(makeHtmlContainerArray));
    });
});
