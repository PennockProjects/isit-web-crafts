import React from 'react';
import ReactDOM from 'react-dom';

import ReactHome from '../ReactHome';
import HomeButtons from '../HomeButtons';
import MakeHtml from "../MakeHtml";
import MakeHtmlDropDowns from '../MakeHtmlDropDowns';
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

    it("renders MakeHtmlDropDowns without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<MakeHtmlDropDowns/>, div);
    });

    it("renders MakeHtmlHomeButton without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<MakeHtmlHomeButton/>, div);
    });
});