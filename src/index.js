
import React from 'react';
//import React, {Component} from 'react';

//import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import Library from './Library'



//import PropTypes from "prop-types" // -----> Property checking feature 1: Prop Types

                                    // useful in debuggoing because it'll help you track down where the problem is

// let bookList = {} // Warning: Failed prop type: Invalid prop `books` of type `object` supplied to `Library`, expected `array`.

let bookList = [
    {}, 
    {"title": "Default"}, // Default props 
    {"title":"The Sun Also Rised","author":"Ernest Hemingway","pages":260},
    {"title":"White Teeth","author":"Zadie Smith","pages":100},
    {"title":"Cat's Cradle","author":"Kurt Vonnegut","pages":304},
];




render(
  // <Library />,  --> defaultProps will be displayed in this way

   <Library books={bookList} />,
     
    document.getElementById('root')
)