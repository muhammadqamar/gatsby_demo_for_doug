import React from "react";
import ReactDOM from 'react-dom';
import Home from "../"

it('renders ok', () => {
    const div =  document.createElement('div')
    ReactDOM.render(<Home></Home>, div)
})