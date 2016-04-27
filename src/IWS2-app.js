import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom";
import Container from "./Container.jsx";
/* eslint-enable */
import JSZip from "jszip";
/*global Weave, weavejs*/

//temporary solution
weavejs.util.JS.JSZip = JSZip;

Weave.registerAsyncClass(React.Component);

$(() => {
	var weave = window.weave = new Weave();
	ReactDOM.render(<Container weave={weave} />, document.getElementById("Container"));
});
