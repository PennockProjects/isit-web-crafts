import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'make-image-container.spec');

import MakeImageContainer from '../container/MakeImageContainer';
import MakeHtmlHomeButton from '../MakeHtmlHomeButton';
import MUIButton from "../controls/MUIButton";
import PreObjectKeys from '../controls/PreObjectKeys';

describe("WebCrafts MakeImageContainer test", () => {

    it('proves that MakeHtmlHomeButton, MUIButton, and PreObjectKeys created in the container', () => {
        const wrapper = shallow(<MakeImageContainer />);

        const matchingElementsArray = [
            <MakeHtmlHomeButton />,
            <MUIButton/>,
            <PreObjectKeys/>
        ];
        elfDebugEnzyme.getAll(wrapper, true);
        expect(wrapper.containsAnyMatchingElements(matchingElementsArray));
    });

});
