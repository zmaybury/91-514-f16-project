/**
 * This component contains
 * The D3 Word Cloud Tool
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

export default class D3WordCloud extends React.Component<IVisToolProps, IVisToolState>
{

	constructor(props) {
		super(props);
		this.element = null;
		this.props = props;
		this.color = d3.scale.linear()
			.domain([-1, 1])
			.range(["red","green"]);
		this.size = d3.scale.linear()
			.domain([-1,0,1])
			.range([48,12,48])
	}

	componentDidMount () {
		this.element = ReactDOM.findDOMNode(this);

		d3.layout.cloud().size([this.element.clientWidth, this.element.clientHeight])
			.words(this.props.words.map((d) => {
				console.log(d);
				return {text: d.text, size: this.size(d.size), fill: this.color(d.size)};
			}))
			.rotate(function() { return ~~(Math.random() * 2) * 90; })
			.font("Impact")
			.fontSize(function(d) { return d.size; })
			.on("end", this.draw.bind(this))
			.start();
	}

	componentDidUpdate() {
	}



	componentWillUnmount() {

	}

	draw(words) {
		d3.select(this.element).append("svg")
			.attr("width", this.element.clientWidth)
			.attr("height", this.element.clientHeight)
			.append("g")
			.attr("transform", "translate(150,150)")
			.selectAll("text")
			.data(words)
			.enter().append("text")
			.style("font-size", function(d) { return d.size + "px"; })
			.style("font-family", "Impact")
			.style("fill", (d, i)=> { return this.color(this.props.words[i].size) })
			.attr("text-anchor", "middle")
			.attr("transform", function(d) {
				return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
			})
			.text(function(d) { return d.text; });
	}

	render(){
		return(
			<VBox style={{flex:1, height:"100%"}}>
			</VBox>);
	}
}