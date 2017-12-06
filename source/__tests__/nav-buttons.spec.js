import React from "react";

import {NavButtons} from "../controls/NavButtons";
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
        var makeHtmlBtn = wrapper.find("#makeHtml");
        var makeImageBtn = wrapper.find("#makeImage");
        var showUsersBtn = wrapper.find("#showUsers");
        expect(homeBtn).toHaveLength(1);
        expect(makeHtmlBtn).toHaveLength(1);
        expect(makeImageBtn).toHaveLength(1);
        expect(showUsersBtn).toHaveLength(1);
    });

    it('renders nav buttons except component="app"', () => {
        const wrapper = shallow(<NavButtons component="app"/>);
        var homeBtn = wrapper.find("#goHome");
        var makeHtmlBtn = wrapper.find("#makeHtml");
        var makeImageBtn = wrapper.find("#makeImage");
        var showUsersBtn = wrapper.find("#showUsers");
        expect(homeBtn).toHaveLength(0);
        expect(makeHtmlBtn).toHaveLength(1);
        expect(makeImageBtn).toHaveLength(1);
        expect(showUsersBtn).toHaveLength(1);
    });

    it('renders nav buttons except component="show_make_html"', () => {
        const wrapper = shallow(<NavButtons component="show_make_html"/>);
        var homeBtn = wrapper.find("#goHome");
        var makeHtmlBtn = wrapper.find("#makeHtml");
        var makeImageBtn = wrapper.find("#makeImage");
        var showUsersBtn = wrapper.find("#showUsers");
        expect(homeBtn).toHaveLength(1);
        expect(makeHtmlBtn).toHaveLength(0);
        expect(makeImageBtn).toHaveLength(1);
        expect(showUsersBtn).toHaveLength(1);
    });

    it('renders nav buttons except component="show_make_image"', () => {
        const wrapper = shallow(<NavButtons component="show_make_image"/>);
        var homeBtn = wrapper.find("#goHome");
        var makeHtmlBtn = wrapper.find("#makeHtml");
        var makeImageBtn = wrapper.find("#makeImage");
        var showUsersBtn = wrapper.find("#showUsers");
        expect(homeBtn).toHaveLength(1);
        expect(makeHtmlBtn).toHaveLength(1);
        expect(makeImageBtn).toHaveLength(0);
        expect(showUsersBtn).toHaveLength(1);
    });


    it('renders nav buttons except component="show_users"', () => {
        const wrapper = shallow(<NavButtons component="show_users"/>);
        var homeBtn = wrapper.find("#goHome");
        var makeHtmlBtn = wrapper.find("#makeHtml");
        var makeImageBtn = wrapper.find("#makeImage");
        var showUsersBtn = wrapper.find("#showUsers");
        expect(homeBtn).toHaveLength(1);
        expect(makeHtmlBtn).toHaveLength(1);
        expect(makeImageBtn).toHaveLength(1);
        expect(showUsersBtn).toHaveLength(0);
    });


    // it("renders nav buttons except props.component", done => {
    //     const wrapper = shallow(<NavButtons />);
    //
    //     wrapper.find("#makeHtml").simulate("click");
    // });
    //
    // it("publishes clientMakeImage on button click", done => {
    //     const wrapper = shallow(<NavButtons />);
    //     $.subscribe("clientMakeImage", (event, target) => {
    //         expect(event.type).toBe("clientMakeImage");
    //         expect(target.message).toBe("The user wants to makeImage.");
    //         done();
    //     });
    //     wrapper.find("#makeImage").simulate("click");
    // });
});
