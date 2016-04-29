import React from "react";
import {VBox, HBox} from "weave-html5";
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
		return (
			<HBox style={{width:"100%",height:"100%", backgroundColor: "#EAEAEA"}}>
				<VBox style={{flex:3}}>
					<HBox style={{flex:1, backgroundColor: "#EAEAEA"}}>
						<VBox style={{display: "flex", flex:1, backgroundColor: "#FFFFFF"}}>
							<WeaveLayout weave={weave}/>
						</VBox>
					</HBox>
					<HBox style={{backgroundColor: "#EAEAEA", flex:1}}>
						<VBox style={{display: "flex", flex:1, padding:15, backgroundColor: "#EAEAEA"}}>
							<TwitterTool defaultHandle="ESPNNBA" handleColumnID="Twitter"/>
						</VBox>
						<VBox style={{display: "flex", flex:1, padding:15, backgroundColor: "#EAEAEA"}}>
							<TwitterTool defaultHandle="SHAQ" handleColumnID="Team Twitter"/>
						</VBox>
						<VBox style={{display: "flex", flex:1, padding:15, backgroundColor: "#EAEAEA"}}>
							<TwitterTool defaultHandle="NBAonTNT" handleColumnID="Arena Twitter"/>
						</VBox>
					</HBox>

				</VBox>
				<VBox style={{flex:1, overflow:"hidden"}}>
						<HBox style={{display: "flex", flex:1, padding:15, backgroundColor: "#EAEAEA"}}>
							<AlchemyAPINewsTool
								keywordColumnID="Player"
								alchemyAPIKey="16080817aad99d0f9fa059f4d323ef9c1384f2c3"/>
						</HBox>
						<HBox style={{display: "flex", flex:1, padding:15, backgroundColor: "#EAEAEA"}}>
							<AlchemyAPINewsTool
								keywordColumnID="Team Name"
								alchemyAPIKey="16080817aad99d0f9fa059f4d323ef9c1384f2c3"/>
						</HBox>
						<HBox style={{display: "flex", flex:1, padding:15, backgroundColor: "#EAEAEA"}}>
							<AlchemyAPINewsTool
								keywordColumnID="City Name"
								alchemyAPIKey="16080817aad99d0f9fa059f4d323ef9c1384f2c3"/>
						</HBox>
				</VBox>
			</HBox>
		);
	}
}