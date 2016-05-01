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
		// fix main menu to page on passing
		$('.main.menu').visibility({
			type: 'fixed'
		});

		// lazy load images
		$('.image').visibility({
			type: 'image',
			transition: 'vertical flip in',
			duration: 500
		});

		// show dropdown on hover
		$('.main.menu  .ui.dropdown').dropdown({
			on: 'hover'
		});

		// fix menu when passed
		$('.masthead')
			.visibility({
				once: false,
				onBottomPassed: function() {
					$('.fixed.menu').transition('fade in');
				},
				onBottomPassedReverse: function() {
					$('.fixed.menu').transition('fade out');
				}
			})
		;

		// create sidebar and attach to menu open
		$('.ui.sidebar')
			.sidebar('attach events', '.toc.item')
		;
	}

	render() {
		{/*<div className="ui inverted text container">
				<h1 className="ui dividing header">
					2015-2016 National Basketball Association
				</h1>
				<VBox style={{flex:3}}>
					<HBox style={{flex:1, backgroundColor: "#EAEAEA"}}>
						<VBox style={{display: "flex", flex:1, backgroundColor: "#FFFFFF"}}>
							<WeaveComponentRenderer weave={this.weave} path={["Layout"]}/>
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
			</div>

			"Table"

			*/}

		return (<div>
			<div className="ui large top fixed hidden menu">
				<div className="ui container">
					<a className="active item">Home</a>
					<a className="item">Work</a>
					<a className="item">Company</a>
					<a className="item">Careers</a>
					<div className="right menu">
						<div className="item">
							<a className="ui button">Log in</a>
						</div>
						<div className="item">
							<a className="ui primary button">Sign Up</a>
						</div>
					</div>
				</div>
			</div>

			{/*<!-- Sidebar Menu -->*/}
			<div className="ui vertical inverted sidebar menu">
				<a className="active item">Home</a>
				<a className="item">Work</a>
				<a className="item">Company</a>
				<a className="item">Careers</a>
				<a className="item">Login</a>
				<a className="item">Signup</a>
			</div>


			{/*<!-- Page Contents -->*/}
			<div className="pusher">
				<div className="ui inverted vertical masthead center aligned segment">

					<div className="ui container">
						<div className="ui large secondary inverted pointing menu">
							<a className="toc item">
								<i className="sidebar icon"/>
							</a>
							<a className="active item">Home</a>
							<a className="item">Work</a>
							<a className="item">Company</a>
							<a className="item">Careers</a>
							<div className="right item">
								<a className="ui inverted button">Log in</a>
								<a className="ui inverted button">Sign Up</a>
							</div>
						</div>
					</div>

					<div className="ui text container">
						<h1 className="ui inverted header">
							Imagine-a-Company
						</h1>
						<h2>Do whatever you want when you want to.</h2>
						<div className="ui huge primary button">Get Started <i className="right arrow icon"/></div>
					</div>

				</div>

				<div className="ui vertical stripe segment">
					<div className="ui middle aligned stackable grid container">
						<div className="row" style={{height:600}}>
							<div className="eight wide column">
								<h3 className="ui header">We Help Companies and Companions</h3>
								<div className="ui fluid container">
									<WeaveComponentRenderer weave={this.weave} path={["Color Legend"]} style={{width:"100%", height:"200px"}}/>
								</div>
								<h3 className="ui header">We Make Bananas That Can Dance</h3>
								<VBox style={{height:250, flex:1, backgroundColor: "#EAEAEA"}}>
									<TwitterTool defaultHandle="NBAonTNT" handleColumnID="Twitter"/>
								</VBox>
							</div>
							<div className="eight wide column">
								<div className="ui fluid container">
									<WeaveComponentRenderer weave={this.weave} path={["ScatterPlotTool"]} style={{width:"100%", height:"100%"}}/>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="center aligned column">
								<a className="ui huge button">Check Them Out</a>
							</div>
						</div>
					</div>
				</div>


				<div className="ui vertical stripe quote segment">
					<div className="ui equal width stackable internally celled grid">
						<div className="center aligned row">
							<div className="column">
								<h3>"What a Company"</h3>
								<p>That is what they all say about us</p>
							</div>
							<div className="column">
								<h3>"I shouldn't have gone with their competitor."</h3>
								<p>
									<img src="assets/images/avatar/nan.jpg" className="ui avatar image"/> <b>Nan</b> Chief Fun Officer Acme Toys
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="ui vertical stripe segment">
					<div className="ui text container">
						<h3 className="ui header">Breaking The Grid, Grabs Your Attention</h3>
						<p>Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention.</p>
						<a className="ui large button">Read More</a>
						<h4 className="ui horizontal header divider">
							<a href="#">Case Studies</a>
						</h4>
						<h3 className="ui header">Did We Tell You About Our Bananas?</h3>
						<p>Yes I know you probably disregarded the earlier boasts as non-sequitor filler content, but its really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance.</p>
						<a className="ui large button">I'm Still Quite Interested</a>
					</div>
				</div>

				<div className="ui main text container">
					<h1 className="ui dividing header">Sticky Example</h1>
					<p>This example shows how to use lazy loaded images, a sticky menu, and a simple text container</p>
					<br/>
				</div>

				<div className="ui text container">
					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
					<div className="ui left floated grid container">
						<div className="two column row">
							<div className="six wide column">
								<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
							</div>
							<div className="ten wide column">
								<div className="ui fluid centered card">
									<div className="image">
										<WeaveComponentRenderer weave={this.weave} path={["Histogram"]} style={{width:"100%", height:"500px"}}/>
										<WeaveComponentRenderer weave={this.weave} path={["Attribute Menu Tool"]} style={{width:"100%", height:"100px"}}/>
									</div>
									<div className="content">
										<div className="header">Histogram</div>
										<div className="meta">Assists, Steals, Blocks, and Points by Team</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
					<div className="ui left floated grid container">
						<div className="two column row">
							<div className="ten wide column">
								<div className="ui fluid centered card">
									<div className="image">
										<WeaveComponentRenderer weave={this.weave} path={["CompoundBarChartTool"]} style={{width:"100%", height:"500px"}}/>
									</div>
									<div className="content">
										<div className="header">Percentage Metrics</div>
										<div className="meta">Total rebound, Assist, Steal, and Block Percentage</div>
									</div>
								</div>
							</div>
							<div className="six wide column">
								<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
							</div>
						</div>
					</div>
					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
					<div className="ui left floated grid container">
						<div className="ui fluid centered card">
							<div className="image" style={{display:"flex", height:"750px"}}>
								<VBox>
									<HBox>
										<WeaveComponentRenderer weave={this.weave} path={["MapTool"]} style={{flex:1, height:500}}/>
									</HBox>
									<HBox>
										<VBox style={{height:250, flex:1, padding:15, backgroundColor: "#EAEAEA"}}>
											<TwitterTool defaultHandle="SHAQ" handleColumnID="Team Twitter"/>
										</VBox>
										<VBox style={{height:250, flex:1, padding:15, backgroundColor: "#EAEAEA"}}>
											<TwitterTool defaultHandle="NBAonTNT" handleColumnID="Arena Twitter"/>
										</VBox>
									</HBox>
								</VBox>
							</div>
							<div className="content">
								<div className="header">Map of Top 20 Players and related Twitter Timelines</div>
								<div className="meta">Located by team, sized by player efficiency rating</div>
								<div className="description">Twitter feeds for selected player's team and home team arena are included. These display Shaquille O'neil and NBA on TNT tweets by default when there is no selection made.</div>
							</div>
						</div>
					</div>
					<br/>
					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
					<div className="ui left floated grid container">
						<div className="two column row">
							<div className="six wide column">
								<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
							</div>
							<div className="ten wide column">
								<div className="ui fluid centered card">
									<div className="image">
										<WeaveComponentRenderer weave={this.weave} path={["Line Chart"]} style={{width:"100%", height:"500px"}}/>
									</div>
									<div className="content">
										<div className="header">Line Chart of Shooting Percentage</div>
										<div className="meta">2-point, 3-point, Free Throw, and True Shooting Percentage</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
					<div className="ui left floated grid container">
						<div className="two column row">
							<div className="ten wide column">
								<div className="ui fluid centered card">
									<div className="image">
										<WeaveComponentRenderer weave={this.weave} path={["Pie Chart"]} style={{width:"100%", height:"500px"}}/>
									</div>
									<div className="content">
										<div className="header">Pie Chart of 3-Point Attempts</div>
										<div className="meta">Colored by Player Efficiency</div>
									</div>
								</div>
							</div>
							<div className="six wide column">
								<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
							</div>
						</div>
					</div>
					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
				</div>


				<div className="ui inverted vertical footer segment">
					<div className="ui container">
						<div className="ui stackable inverted divided equal height stackable grid">
							<div className="three wide column">
								<h4 className="ui inverted header">About</h4>
								<div className="ui inverted link list">
									<a href="#" className="item">Sitemap</a>
									<a href="#" className="item">Contact Us</a>
									<a href="#" className="item">Religious Ceremonies</a>
									<a href="#" className="item">Gazebo Plans</a>
								</div>
							</div>
							<div className="three wide column">
								<h4 className="ui inverted header">Services</h4>
								<div className="ui inverted link list">
									<a href="#" className="item">Banana Pre-Order</a>
									<a href="#" className="item">DNA FAQ</a>
									<a href="#" className="item">How To Access</a>
									<a href="#" className="item">Favorite X-Men</a>
								</div>
							</div>
							<div className="seven wide column">
								<h4 className="ui inverted header">Footer Header</h4>
								<p>Extra space for a call to action inside the footer that could help re-engage users.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		);
	}
}