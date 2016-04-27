import React from "react";
import {ui, MiscUtils, WeaveComponentRenderer} from "weave-html5";
import {VBox, HBox} from "weave-html5";

function loadWeaveSession(weaveInstance,sessionFileUrl, callback)
{
	weavejs.core.WeaveArchive.loadUrl(weaveInstance, sessionFileUrl).then(() => callback());
}

export default class WeaveLayout extends React.Component {

    constructor(props) {
        super(props);
        this.weave = props.weave;
		this.session = "2015-2016_NBA_Stats.weave";
    }

    componentDidMount() {
		loadWeaveSession(this.weave, this.session, () => {
			this.forceUpdate();
		});
	}

    render() {
		return (
			<VBox style={{width: "100%", height: "100%", backgroundColor: "#EAEAEA"}}>
				<HBox style={{display: "flex", flex:1, backgroundColor: "#FFFFFF"}}>
					<WeaveComponentRenderer weave={this.weave} path={["Layout"]}/>
				</HBox>
			</VBox>
		);
    }
}
