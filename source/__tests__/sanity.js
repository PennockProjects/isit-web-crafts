import React from "react";
import ReactDOM from "react-dom";

import App from "../App";
import MakeHtml from "../MakeHtml";
import MakeImage from "../MakeImage";
import MakeHtmlContainer from "../containers/MakeHtmlContainer";
import MakeImageContainer from "../containers/MakeImageContainer";
import NavButtons from "../controls/NavButtons";
import PairedDropDowns from "../controls/PairedDropDowns";
import MUIButton from "../controls/MUIButton";
import PreObjectKeys from "../controls/PreObjectKeys";

describe("WebCrafts-Pennock Sanity Test", function() {
    it("expects true to be true", () => {
        expect(true).toBe(true);
    });

    it("renders App without crashing.", () => {
        const div = document.createElement("div");
        ReactDOM.render(<App />, div);
    });

    it("renders NavButtons without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<NavButtons />, div);
    });

    it("renders MakeHtml without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<MakeHtml />, div);
    });

    it("renders MakeImage without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<MakeImage />, div);
    });

    it("renders PairedDropDowns without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <PairedDropDowns
                pairArrayLeft={["1", "2"]}
                pairArrayRight={["a", "b"]}
                value={0}
            />,
            div
        );
    });

    it("renders MUIButton without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<MUIButton />, div);
    });

    it("renders PreObjectKeys without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<PreObjectKeys />, div);
    });

    it("renders MakeHtmlContainer without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<MakeHtmlContainer />, div);
    });

    it("renders MakeImageContainer without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<MakeImageContainer />, div);
    });
});
