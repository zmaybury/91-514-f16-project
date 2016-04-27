import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom";
/* eslint-disable */
import WeaveLayout from "./WeaveLayout.jsx";
import TwitterTool from "./tools/TwitterTool.jsx";
/* eslint-enable */
import JSZip from "jszip";
/*global Weave, weavejs*/

//temporary solution
weavejs.util.JS.JSZip = JSZip;

Weave.registerAsyncClass(React.Component);

$(() => {
	var weave = window.weave = new Weave();
	ReactDOM.render(<WeaveLayout weave={weave}/>, document.getElementById("WeaveLayout"));
	ReactDOM.render(<TwitterTool/>, document.getElementById("TwitterTool"));
});
