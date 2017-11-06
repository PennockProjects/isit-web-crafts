// import MakeHtmlContainer from '../container/MakeHtmlContainer';
// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
//
// configure({ adapter: new Adapter() });
// import ElfDebugEnzyme from '../ElfDebugEnzyme';
//
// const elfDebugEnzyme = new ElfDebugEnzyme(true, 'MakeHtmlContainer.spec');

describe("WebCrafts MakeHtmlContainer test", () => {
    it("expects true to be true", () => {
        expect(true).toBe(true);
    });

    // it('renders default value of H1 tag', () => {
    //     const wrapper = shallow(<MakeHtmlContainer />);
    //
    //     expect(wrapper.contains(<h1>Webcraft Make Html Page</h1>)).toEqual(true);
    //
    //     // const nineSign = <h1>Webcraft Make Html Page</h1>;
    //     // elfDebugEnzyme.getFirst(wrapper, 'h1', true);
    //     // expect(wrapper.contains(nineSign)).toEqual(true);
    // });
});
