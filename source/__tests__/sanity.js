import React from 'react';
import ReactDOM from 'react-dom';

import ReactHome from '../ReactHome';
import HomeButtons from '../HomeButtons';

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


});