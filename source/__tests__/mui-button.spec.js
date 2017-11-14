import React from "react";

import MUIButton from "../controls/MUIButton";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const gotClick = ;

describe("WebCrafts Home Buttons Test", () => {

    it("expects true to be true", () => {
        expect(true).toBe(true);
    });

    it("MUIButton responds to a click", (done) => {

        const wrapper = shallow(<MUIButton buttonId={"fooButton"} handleClick={function() {
            console.log("gotClick");
            done();
        }}
        />);
        wrapper.find("#fooButton").simulate("click");
    });

});
