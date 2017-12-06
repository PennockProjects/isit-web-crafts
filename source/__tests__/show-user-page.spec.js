import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'show-user-page.spec');

import {ShowUserPage} from '../containers/ShowUserPage';

import NavButtons from '../controls/NavButtons';

describe("WebCrafts make-html-container test", () => {

    const mockUserProps = {
        "alice": {
            "base-dir": "/all/alice/",
            "bootswatch": "alicewatch"
        },
        "betty": {
            "base-dir": "/both/betty/",
            "bootswatch": "bettywatch"
        }
    }
    const mockUserNames = ["alice", "betty"];

    it('renders H1 tag for mock user alice', () => {

        let mockUserIndex = 0;

        const wrapper = shallow(<ShowUserPage
            userNames={mockUserNames}
            userProps={mockUserProps}
            userIndex={mockUserIndex} />);
        const h1 = <h1>User: alice</h1>;
        elfDebugEnzyme.getAll(wrapper, true);
        expect(wrapper.contains(h1)).toEqual(true);
    });

    it('renders H1 tag for mock user betty', () => {

        let mockUserIndex = 1;

        const wrapper = shallow(<ShowUserPage
            userNames={mockUserNames}
            userProps={mockUserProps}
            userIndex={mockUserIndex} />);
        const h1 = <h1>User: betty</h1>;
        elfDebugEnzyme.getAll(wrapper, true);
        expect(wrapper.contains(h1)).toEqual(true);
    });

    it('contains NavButtons component', () => {
        let mockUserIndex = 0;
        const wrapper = shallow(<ShowUserPage
            userNames={mockUserNames}
            userProps={mockUserProps}
            userIndex={mockUserIndex} />);

        const matchingElementsArray = [
            <NavButtons/>
        ];
        elfDebugEnzyme.getAll(wrapper, true);
        expect(wrapper.containsAnyMatchingElements(matchingElementsArray));
    });


});
