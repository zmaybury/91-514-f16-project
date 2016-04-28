import React from "react";
import {ui, MiscUtils, WeaveComponentRenderer, WeaveApp} from "weave-html5";
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
			<WeaveApp
			    readUrlParams={true}
			    weave={this.weave}
			    renderPath={["Layout"]}
			    style={{width: "100%", height: "100%"}}
		    />
		);
    }
}
