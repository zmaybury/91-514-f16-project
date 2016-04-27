/**
 * This component contains
 * The Twitter Tool
 *
 * author zachmaybury
 */

import React from "react";
import ReactDOM from "react-dom";
import {VBox, HBox} from "weave-html5";
import * as jquery from "jquery";
import * as _ from "lodash";

// loads jquery from the es6 default module.
var $ = (jquery)["default"];

export default class TwitterTool extends React.Component<IVisToolProps, IVisToolState> implements IVisTool
{

	constructor(props) {
		super(props);

		this.filteredKeySet = Weave.linkableChild(this, weavejs.data.key.FilteredKeySet);
		this.selectionKeySet = Weave.linkableChild(this, weavejs.data.key.KeySet);
		this.probeKeySet = Weave.linkableChild(this, weavejs.data.key.KeySet);
		this.element = null;
		this.debounced_linkState = _.debounce(this.linkState,30);

		this.selectionKeySet.addGroupedCallback(this, this.forceUpdate);
		this.probeKeySet.addGroupedCallback(this, this.forceUpdate);
	}

	componentDidMount () {
		this.element = ReactDOM.findDOMNode(this);
		this.debounced_linkState();
		var tweet = this.element.querySelector("#tweet");
		var id = tweet.getAttribute("data-tweetid");

		twttr.widgets.createTweet(
			id, tweet,
			{
				conversation : 'none',    // or all
				cards        : 'visible',  // or hidden
				linkColor    : '#cc0000', // default is blue
				theme        : 'light'    // or dark
			});
	}

	linkState() {
		if(!weave.getObject("ScatterPlotTool","filteredKeySet"))
			return this.debounced_linkState();
		Weave.linkState(weave.getObject("defaultSelectionKeySet"),this.selectionKeySet);
		Weave.linkState(weave.getObject("defaultProbeKeySet"),this.probeKeySet);
		this.filteredKeySet = weave.getObject(["ScatterPlotTool","filteredKeySet"]);
	}

	componentWillUnmount() {
		
	}

	render(){
		return(
			<VBox style={{flex:1}}>
				<div id="tweet" data-tweetid="515490786800963584"></div>
			</VBox>);
	}
}

Weave.registerClass(
	TwitterTool,
	["weavejs.tool.TwitterTool", "weave.visualization.tools::TwitterTool"],
	[weavejs.api.ui.IVisTool_Basic, weavejs.api.core.ILinkableObjectWithNewProperties],
	"Twitter Tool"
);