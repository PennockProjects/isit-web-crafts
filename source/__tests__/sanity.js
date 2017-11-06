import React from 'react';
import ReactDOM from 'react-dom';

import ReactHome from '../ReactHome';
import HomeButtons from '../HomeButtons';
import MakeHtml from "../MakeHtml";
import MakeHtmlContainer from "../container/MakeHtmlContainer";
import PairedDropDowns from '../controls/PairedDropDowns';
import MUIButton from '../controls/MUIButton';
import PreObjectKeys from '../controls/PreObjectKeys';
import MakeHtmlHomeButton from '../MakeHtmlHomeButton';

describe('WebCrafts-Pennock Sanity Test', function() {

    it('expects true to be true', () => {
        expect(true).toBe(true);
    });

    it('renders ReactHome without crashing.', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ReactHome/>, div);
    });

    it("renders HomeButtons without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<HomeButtons/>, div);
    });

    it("renders MakeHtml without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<MakeHtml/>, div);
    });

    it("renders PairedDropDowns without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<PairedDropDowns
            pairArrayLeft={["1", "2"]}
            pairArrayRight={["a", "b"]}
            value={0}
        />, div);
    });

    it("renders MUIButton without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<MUIButton/>, div);
    });

    it("renders PreObjectKeys without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<PreObjectKeys/>, div);
    });

    it("renders MakeHtmlContainer without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<MakeHtmlContainer/>, div);
    });

    it("renders MakeHtmlHomeButton without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<MakeHtmlHomeButton/>, div);
    });
});