import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom";
import PageContainer from "./PageContainer.jsx";
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
	var session = "2015-2016_NBA_Stats.weave";
	loadWeaveSession(weave, session, () => {
		ReactDOM.render(<PageContainer weave={weave} />, document.getElementById("Container"));
	});
});
