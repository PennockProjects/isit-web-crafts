import React from "react";

import NavButtons from "../controls/NavButtons";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'nav-buttons');

describe("WebCrafts Nav Buttons Test", () => {

    it("expects true to be true", () => {
        expect(true).toBe(true);
    });

    it('renders all nav buttons', () => {
        const wrapper = shallow(<NavButtons />);
        var homeBtn = wrapper.find("#goHome");
        expect(homeBtn).toExist();
    });

    it("publishes clientMakeHTML on button click", done => {
        const wrapper = shallow(<NavButtons />);
        $.subscribe("clientMakeHtml", (event, target) => {
            expect(event.type).toBe("clientMakeHtml");
            expect(target.message).toBe("The user wants to makeHtml.");
            done();
        });
        wrapper.find("#makeHtml").simulate("click");
    });

    it("publishes clientMakeImage on button click", done => {
        const wrapper = shallow(<NavButtons />);
        $.subscribe("clientMakeImage", (event, target) => {
            expect(event.type).toBe("clientMakeImage");
            expect(target.message).toBe("The user wants to makeImage.");
            done();
        });
        wrapper.find("#makeImage").simulate("click");
    });
});
