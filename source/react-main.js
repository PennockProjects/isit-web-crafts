import React from "react";
import ReactDOM from "react-dom";
import ReactHome from "./ReactHome";
import MakeHtml from "./MakeHtml";
import MakeImage from "./MakeImage";

let homeDiv = null;

function reactMakeHtml(event, customMessage) {
    ReactDOM.render(<MakeHtml />, homeDiv);
}

function reactMakeImage(event, customMessage) {
    console.log("react-main reactMakeImage");
    ReactDOM.render(<MakeImage/>, homeDiv);
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
    $.subscribe('reactMakeImage', reactMakeImage);
    $.subscribe("home", reactHome);
    home();
    //const home = document.getElementById('home');
    //ReactDOM.render(<ReactHome/>, home);
});
