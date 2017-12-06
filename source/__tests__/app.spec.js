import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'app.spec');

import {App} from '../App';
import {ConfigLoginPage} from "../containers/ConfigLoginPage";
import ShowUser from "../containers/ShowUserPage";
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';

it('contains compnents and ConfigLogin with no props', () => {
    const wrapper = shallow(<App />);

    const matchingElementsArray = [
        <AppBar />,
        <Paper />,
        <ConfigLoginPage/>,
        <Toolbar />,
        <ToolbarTitle />,
        <Drawer />,
        <MenuItem />,
    ];
    elfDebugEnzyme.getAll(wrapper, true);
    expect(wrapper.containsAllMatchingElements(matchingElementsArray));
});
