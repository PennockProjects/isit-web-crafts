import React from "react";
import ReactDOM from "react-dom";
import ReactHome from "./ReactHome";
import MakeHtml from "./MakeHtml";

let homeDiv = null;

function reactMakeHtml(event, customMessage) {
    ReactDOM.render(<MakeHtml />, homeDiv);
}

function home() {
    ReactDOM.render(<ReactHome />, homeDiv);
}

function reactHome() {
    $("#pageLoad").empty();
    home();
}

$(document).ready(function() {
    homeDiv = document.getElementById("home");
    $.subscribe("reactMakeHtml", reactMakeHtml);
    $.subscribe("home", reactHome);
    home();
    //const home = document.getElementById('home');
    //ReactDOM.render(<ReactHome/>, home);
});
