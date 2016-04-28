import React from "react";
import {VBox, HBox} from "weave-html5";
import WeaveLayout from "./WeaveLayout.jsx";
import TwitterTool from "./tools/TwitterTool.jsx";


export default class Container extends React.Component {

	constructor(props) {
		super(props);
		this.weave = props.weave;
	}

	componentDidMount() {
	}

	render() {
		return (
			<HBox style={{width: "100%", height: "100%", backgroundColor: "#EAEAEA"}}>
				<VBox style={{display: "flex", flex:1, backgroundColor: "#FFFFFF"}}>
					<WeaveLayout weave={weave}/>
				</VBox>
				<VBox style={{backgroundColor: "#FFFFFF", border:"1px solid lightgrey",padding:2}}>
					<HBox style={{display: "flex", flex:1}}>
						<TwitterTool defaultHandle="ESPNNBA" handleColumnID="Twitter"/>
					</HBox>
					<HBox style={{display: "flex", flex:1}}>
						<TwitterTool defaultHandle="SHAQ" handleColumnID="Team Twitter"/>
					</HBox>
					<HBox style={{display: "flex", flex:1}}>
						<TwitterTool defaultHandle="NBAonTNT" handleColumnID="Arena Twitter"/>
					</HBox>
				</VBox>
			</HBox>
		);
	}
}