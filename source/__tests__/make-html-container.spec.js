import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'make-html-container.spec');

import MakeHtmlContainer from '../container/MakeHtmlContainer';
import MakeHtmlHomeButton from '../MakeHtmlHomeButton';
import PairedDropDowns from "../controls/PairedDropDowns";
import MUIButton from "../controls/MUIButton";
import PreObjectKeys from '../controls/PreObjectKeys';

describe("WebCrafts make-html-container test", () => {

    it('renders default value of H1 tag', () => {
        const wrapper = shallow(<MakeHtmlContainer configLoading={2} />);
        const h1 = <h1>Webcraft Make Html Page</h1>;
        elfDebugEnzyme.getAll(wrapper, true);
        expect(wrapper.contains(h1)).toEqual(true);
    });

    it('proves that MakeHtmlHomeButton, PairedDropDowns, MUIButton, and PreObjectKeys created in the container', () => {
        const wrapper = shallow(<MakeHtmlContainer configLoading={2} />);

        const matchingElementsArray = [
            <MakeHtmlHomeButton />,
            <PairedDropDowns/>,
            <MUIButton/>,
            <PreObjectKeys/>
        ];
        elfDebugEnzyme.getAll(wrapper, true);
        expect(wrapper.containsAnyMatchingElements(matchingElementsArray));
    });

});
