import React from "react";
import {VBox, HBox, ui, MiscUtils, WeaveComponentRenderer} from "weave-html5";
import WeaveLayout from "./WeaveLayout.jsx";
import TwitterTool from "./tools/TwitterTool.jsx";
import AlchemyAPINewsTool from "./tools/AlchemyAPINewsTool.jsx";

export default class Container extends React.Component {

	constructor(props) {
		super(props);
		this.weave = props.weave;
	}

	componentDidMount() {

	}

	render() {
		return (<div style={{width:"400px", height:"400px"}}><WeaveComponentRenderer weave={weave} path={["ScatterPlotTool"]} style={{width:"100%", height:"100%"}}/></div>);
	}
}