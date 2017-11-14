import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import PreObjectKeys from '../controls/PreObjectKeys';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'make-image');

describe('PreObjectKeys Tests', () => {
    it('renders loading for loading stage 1', () => {
        const wrapper = shallow(<PreObjectKeys loadingStage={1} />);
        const preElement =  <pre>loading....</pre>;
        elfDebugEnzyme.getLast(wrapper, 'pre', true);
        expect(wrapper.contains(preElement)).toEqual(true);
    });

    it('renders objects for loading stage 2', () => {
        var objectKeys = {
            Number: 1,
            Text: "a string"
        }
        const wrapper = shallow(<PreObjectKeys loadingStage={2} objectKeys={objectKeys} />);

        var stringifiedObjectKeys = JSON.stringify(objectKeys, null, 4);
        const preElement =  <pre>{stringifiedObjectKeys}</pre>;
        elfDebugEnzyme.getLast(wrapper, 'pre', true);
        expect(wrapper.contains(preElement)).toEqual(true);
    });

    it('renders loading for loading stage 3', () => {
        const wrapper = shallow(<PreObjectKeys loadingStage={3} />);
        const preElement =  <pre>loading....</pre>;
        elfDebugEnzyme.getLast(wrapper, 'pre', true);
        expect(wrapper.contains(preElement)).toEqual(true);
    });
});