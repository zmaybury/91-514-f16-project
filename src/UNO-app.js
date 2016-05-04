import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom";
import UNOContainer from "./UNOContainer.jsx";
import {VBox, HBox, ui, MiscUtils, WeaveComponentRenderer} from "weave-html5";

/* eslint-enable */
import JSZip from "jszip";
/*global Weave, weavejs*/

//temporary solution
weavejs.util.JS.JSZip = JSZip;

Weave.registerAsyncClass(React.Component);

function loadWeaveSession(weaveInstance,sessionFileUrl, callback)
{
	weavejs.core.WeaveArchive.loadUrl(weaveInstance, sessionFileUrl).then(() => callback());
}

$(() => {
	var weave = window.weave = new Weave();
	var session = "TN_Obesity.weave";
	loadWeaveSession(weave, session, () => {
		ReactDOM.render(<UNOContainer weave={weave}/>, document.getElementById("scatterplot"));
		ReactDOM.render(<div style={{width:"100%", height:"100%"}}><WeaveComponentRenderer weave={weave} path={["MapTool"]} style={{width:"100%", height:"100%"}}/></div>, document.getElementById("maptool"));
	});
});
