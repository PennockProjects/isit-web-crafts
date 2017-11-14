import React from "react";
import "../../public/javascripts/tools/tiny-pub-sub.js";

import HomeButtons from "../HomeButtons";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("WebCrafts Home Buttons Test", () => {

    it("expects true to be true", () => {
        expect(true).toBe(true);
    });

    it("publishes clientMakeHTML on button click", done => {
        const wrapper = shallow(<HomeButtons />);
        $.subscribe("clientMakeHtml", (event, target) => {
            expect(event.type).toBe("clientMakeHtml");
            expect(target.message).toBe("The user wants to makeHtml.");
            done();
        });
        wrapper.find("#makeHtml").simulate("click");
    });

    it("publishes clientMakeImage on button click", done => {
        const wrapper = shallow(<HomeButtons />);
        $.subscribe("clientMakeImage", (event, target) => {
            expect(event.type).toBe("clientMakeImage");
            expect(target.message).toBe("The user wants to makeImage.");
            done();
        });
        wrapper.find("#makeImage").simulate("click");
    });
});
