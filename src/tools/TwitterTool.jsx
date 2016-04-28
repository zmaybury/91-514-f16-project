/**
 * This component contains
 * The Twitter Tool
 *
 * author zachmaybury
 */

import React from "react";
import ReactDOM from "react-dom";
import * as TwitterClient from "twitter-node-client";
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
		//this.handleColumn = Weave.linkableChild(this, weavejs.data.column.DynamicColumn);
		this.element = null;

		// this.RECORD_FORMAT = {
		// 	id: weavejs.api.data.IQualifiedKey,
		// 	handle: this.handleColumn
		// };
		// this.RECORD_DATATYPE = {
		// 	handle: String
		// };

		this.records = [];

		this.state = {twitterHandle:null};

		this.debounced_linkState = _.debounce(this.linkState,30);

		this.selectionKeySet.addGroupedCallback(this, this.dataChanged);
		this.probeKeySet.addGroupedCallback(this, this.forceUpdate);
		//this.handleColumn.addGroupedCallback(this, this.dataChanged, true);
	}

	dataChanged()
	{
		//this.records = weavejs.data.ColumnUtils.getRecords(this.RECORD_FORMAT, this.selectionKeySet.keys, this.RECORD_DATATYPE);

		let idProperty = '';
		var ds = weave.getObject("2015-2016_NBA_Media.csv");
		var columnNames = ds.getColumnNames();
		var columns = columnNames.map((name) => ds.getColumnByName(name));

		var format:any = _.zipObject(columnNames, columns);
		format[idProperty] = weavejs.api.data.IQualifiedKey;

		this.records = weavejs.data.ColumnUtils.getRecords(format, this.selectionKeySet.keys, String);
		var tweet = this.element.querySelector("#tweet");
		var id = tweet.getAttribute("data-widget-id");
		$(this.element).find("#tweet").empty();

		if(this.records && this.records[0] && this.records[0].Twitter)
			this.updateTimeline(this.records[0].Twitter.slice(1));
		else
			this.updateTimeline("ESPNNBA");
	}

	componentDidMount () {

		this.element = ReactDOM.findDOMNode(this);
		this.debounced_linkState();
		this.updateTimeline("ESPNNBA");

	}

	componentDidUpdate() {
	}

	updateTimeline(screenName)
	{
		var tweet = this.element.querySelector("#tweet");
		var id = tweet.getAttribute("data-widget-id");
		$(this.element).find("#tweet").empty();
		twttr.widgets.createTimeline(
			id,
			tweet,
			{
				width: '450',
				height: '700',
				related: 'twitterdev,twitterapi',
				screenName,
				tweetLimit: '5'
			}).then(function (el) { }
		);
	}

	linkState() {
		if(!weave.getObject("ScatterPlotTool","filteredKeySet") || !weave.getObject("2015-2016_NBA_Media.csv"))
			return this.debounced_linkState();
		Weave.linkState(weave.getObject("defaultSelectionKeySet"),this.selectionKeySet);
		Weave.linkState(weave.getObject("defaultProbeKeySet"),this.probeKeySet);
		this.filteredKeySet = weave.getObject(["ScatterPlotTool","filteredKeySet"]);
		//var csv = weave.getObject("2015-2016_NBA_Media.csv");
		//this.handleColumn = csv.getAttributeColumn(csv.getColumnMetadata("Twitter")).getInternalColumn();
	}

	componentWillUnmount() {
		
	}

	render(){
		return(
			<VBox style={{flex:1, overflow:"auto", height:"100%"}}>
				<div id="tweet" data-widget-id="725155974143721472"></div>
			</VBox>);
	}
}

Weave.registerClass(
	TwitterTool,
	["weavejs.tool.TwitterTool", "weave.visualization.tools::TwitterTool"],
	[weavejs.api.ui.IVisTool_Basic, weavejs.api.core.ILinkableObjectWithNewProperties],
	"Twitter Tool"
);