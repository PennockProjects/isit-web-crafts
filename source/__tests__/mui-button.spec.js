import React from "react";

import MUIButton from "../controls/MUIButton";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("WebCrafts Home Buttons Test", () => {

    it("MUIButton responds to a click", (done) => {

        const gotClick = (currentSelection) => {
            done();
        };

        const wrapper = shallow(<MUIButton buttonId={"fooButton"} onClick={gotClick}  />);
        wrapper.find("#fooButton").simulate("click");
    });

});
