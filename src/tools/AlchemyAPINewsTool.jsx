/**
 * This component contains
 * The Alchemy API News Tool
 *
 * author zachmaybury
 */

import React from "react";
import ReactDOM from "react-dom";
import {VBox, HBox} from "weave-html5";
import * as jquery from "jquery";
import * as _ from "lodash";
import AlchemyAPIUtils from "../utils/AlchemyAPIUtils.jsx";
import D3WordCloud from "./D3WordCloud.jsx";

const defaultDocuments = [
	{
		"id": "MzkxMDAwODQ5MnwxNDYxOTYyNzUy",
		"source": {
			"enriched": {
				"url": {
					"author": "Michael Bohlin",
					"enrichedTitle": {
						"docSentiment": {
							"mixed": 0,
							"score": 0.452686012,
							"type": "positive"
						},
						"entities": [
							{
								"count": 1,
								"disambiguated": {
									"dbpedia": "http://dbpedia.org/resource/Charles_Barkley",
									"geo": "",
									"name": "Charles Barkley",
									"subType": [
										"Athlete",
										"AwardWinner",
										"BasketballPlayer",
										"HallOfFameInductee",
										"OlympicAthlete",
										"SportsLeagueAwardWinner",
										"FilmActor",
										"TVActor"
									],
									"website": ""
								},
								"knowledgeGraph": {
									"typeHierarchy": "/people/players/charles barkley"
								},
								"quotations": [],
								"relevance": 0.330000013,
								"sentiment": {
									"mixed": 0,
									"score": 0.452686012,
									"type": "positive"
								},
								"text": "Charles Barkley",
								"type": "Person"
							},
							{
								"count": 1,
								"disambiguated": {
									"dbpedia": "http://dbpedia.org/resource/Cleveland_Cavaliers",
									"geo": "",
									"name": "Cleveland Cavaliers",
									"subType": [
										"SportsTeam",
										"BasketballTeam",
										"ProfessionalSportsTeam"
									],
									"website": "http://cavs"
								},
								"knowledgeGraph": {
									"typeHierarchy": "/teams/cleveland cavaliers"
								},
								"quotations": [],
								"relevance": 0.330000013,
								"sentiment": {
									"mixed": 0,
									"score": 0.452686012,
									"type": "positive"
								},
								"text": "Cleveland Cavaliers",
								"type": "Organization"
							},
							{
								"count": 1,
								"disambiguated": {
									"dbpedia": "http://dbpedia.org/resource/National_Basketball_Association",
									"geo": "",
									"name": "National Basketball Association",
									"subType": [
										"SportsAssociation",
										"Profession"
									],
									"website": "http://www.nba.com/"
								},
								"knowledgeGraph": {
									"typeHierarchy": "/events/sports/nba"
								},
								"quotations": [],
								"relevance": 0.330000013,
								"sentiment": {
									"mixed": 0,
									"score": 0.452686012,
									"type": "positive"
								},
								"text": "NBA",
								"type": "Organization"
							}
						]
					},
					"publicationDate": {
						"confident": "no",
						"date": "20160429T000000"
					},
					"title": "Charles Barkley picks Cleveland Cavaliers to win the NBA Finals",
					"url": "http://cavaliers.247sports.com/Bolt/Charles-Barkley-picks-Cleveland-Cavaliers-to-win-the-NBA-Finals-45077949",
					"image":"http://i.huffpost.com/gen/2342936/images/o-CHARLES-BARKLEY-facebook.jpg"
				}
			}
		},
		"timestamp": 1461962752
	},
	{
		"id": "MzkwMjA2MDI1MHwxNDYxOTYxOTUz",
		"source": {
			"enriched": {
				"url": {
					"author": "",
					"enrichedTitle": {
						"docSentiment": {
							"mixed": 1,
							"score": -0.85372299,
							"type": "negative"
						},
						"entities": [
							{
								"count": 1,
								"disambiguated": {
									"dbpedia": "http://dbpedia.org/resource/LeBron_James",
									"geo": "",
									"name": "LeBron James",
									"subType": [
										"Athlete",
										"AwardWinner",
										"BasketballPlayer",
										"FilmProducer",
										"OlympicAthlete",
										"SportsLeagueAwardWinner",
										"FilmActor",
										"TVActor"
									],
									"website": "http://statefarm.com/lebron"
								},
								"knowledgeGraph": {
									"typeHierarchy": "/people/lebron james"
								},
								"quotations": [],
								"relevance": 0.330000013,
								"sentiment": {
									"mixed": 0,
									"score": 0.313365012,
									"type": "positive"
								},
								"text": "LeBron James",
								"type": "Person"
							},
							{
								"count": 1,
								"disambiguated": {
									"dbpedia": "http://dbpedia.org/resource/National_Basketball_Association",
									"geo": "",
									"name": "National Basketball Association",
									"subType": [
										"SportsAssociation",
										"Profession"
									],
									"website": "http://www.nba.com/"
								},
								"knowledgeGraph": {
									"typeHierarchy": "/events/sports/nba"
								},
								"quotations": [],
								"relevance": 0.330000013,
								"sentiment": {
									"mixed": 0,
									"score": -0.475605011,
									"type": "negative"
								},
								"text": "NBA",
								"type": "Organization"
							},
							{
								"count": 1,
								"disambiguated": {
									"dbpedia": "http://dbpedia.org/resource/Dwyane_Wade",
									"geo": "",
									"name": "Dwyane Wade",
									"subType": [
										"Athlete",
										"AwardWinner",
										"BasketballPlayer",
										"OlympicAthlete",
										"SportsLeagueAwardWinner",
										"FilmActor"
									],
									"website": "http://www.dwyanewade.com"
								},
								"knowledgeGraph": {
									"typeHierarchy": "/people/players/dwyane wade"
								},
								"quotations": [],
								"relevance": 0.330000013,
								"sentiment": {
									"mixed": 0,
									"score": -0.475605011,
									"type": "negative"
								},
								"text": "Dwyane Wade",
								"type": "Person"
							},
							{
								"count": 1,
								"disambiguated": {},
								"knowledgeGraph": {
									"typeHierarchy": "/papers/minutes/two minute"
								},
								"quotations": [],
								"relevance": 0.330000013,
								"sentiment": {
									"mixed": 0,
									"score": 0,
									"type": "neutral"
								},
								"text": "Two Minute",
								"type": "Quantity"
							}
						]
					},
					"publicationDate": {
						"confident": "no",
						"date": "20160319T000000"
					},
					"title": "LeBron James, Dwyane Wade rip NBA's 'Last Two Minute' referee report",
					"url": "http://www.msn.com/en-us/sports/nba/lebron-james-dwyane-wade-rip-nbas-last-two-minute-referee-report/ar-BBsr2D8",
					"image":"http://www.trbimg.com/img-5685e7f7/turbine/la-sp-sn-activists-lebron-james-tamir-rice-20151231"
				}
			}
		},
		"timestamp": 1461961953
	},
	{
		"id": "Mzk3ODQ1MDA1MHwxNDYxOTcwNjI3",
		"source": {
			"enriched": {
				"url": {
					"author": "TOM WITHERS Associated Press \n April 29",
					"enrichedTitle": {
						"docSentiment": {
							"mixed": 0,
							"score": 0.656040013,
							"type": "positive"
						},
						"entities": [
							{
								"count": 1,
								"disambiguated": {},
								"knowledgeGraph": {
									"typeHierarchy": "/people/players/lebron"
								},
								"quotations": [],
								"relevance": 0.330000013,
								"sentiment": {
									"mixed": 0,
									"score": 0.485179991,
									"type": "positive"
								},
								"text": "LeBron",
								"type": "Person"
							},
							{
								"count": 1,
								"disambiguated": {
									"dbpedia": "http://dbpedia.org/resource/National_Basketball_Association",
									"geo": "",
									"name": "National Basketball Association",
									"subType": [
										"SportsAssociation",
										"Profession"
									],
									"website": "http://www.nba.com/"
								},
								"knowledgeGraph": {
									"typeHierarchy": "/events/sports/nba"
								},
								"quotations": [],
								"relevance": 0.330000013,
								"sentiment": {
									"mixed": 0,
									"score": 0,
									"type": "neutral"
								},
								"text": "NBA",
								"type": "Organization"
							}
						]
					},
					"publicationDate": {
						"confident": "no",
						"date": "20160429T000000"
					},
					"title": "LeBron 'not fond' of NBA's reviews of officiating",
					"url": "http://www.startribune.com/lebron-not-fond-of-nba-s-reviews-of-officiating/377639471/",
					"image":"http://i.forbesimg.com/media/lists/people/lebron-james_416x416.jpg"
				}
			}
		},
		"timestamp": 1461970627
	}
];


export default class AlchemyAPINewsTool extends React.Component<IVisToolProps, IVisToolState> implements IVisTool
{

	constructor(props) {
		super(props);

		this.filteredKeySet = Weave.linkableChild(this, weavejs.data.key.FilteredKeySet);
		this.selectionKeySet = Weave.linkableChild(this, weavejs.data.key.KeySet);
		this.probeKeySet = Weave.linkableChild(this, weavejs.data.key.KeySet);
		this.alchemyAPIMethodURL = Weave.linkableChild(this, new weavejs.core.LinkableString("https://gateway-a.watsonplatform.net/calls/data/GetNews"));
		this.alchemyAPIKey = Weave.linkableChild(this, new weavejs.core.LinkableString("b476c7c7b0ad21f8e4c19d5ac9068d498e66409b"/*"0994e1aedf71690c76d2a15a8e88742fe399d842"*//*"16080817aad99d0f9fa059f4d323ef9c1384f2c3"*/));
		this.count = Weave.linkableChild(this, new weavejs.core.LinkableNumber(1));
		this.keywordColumn = Weave.linkableChild(this, weavejs.core.LinkableString);
		this.keyword = Weave.linkableChild(this, new weavejs.core.LinkableString("nba"));
		//this.keywordColumn = Weave.linkableChild(this, weavejs.data.column.DynamicColumn);
		this.element = null;
		this.keywordColumn.value = props.keywordColumnID;
		this.apiParams = {};
		if (props.alchemyAPIKey) this.alchemyAPIKey.value = props.alchemyAPIKey;

		// this.RECORD_FORMAT = {
		// 	id: weavejs.api.data.IQualifiedKey,
		// 	handle: this.keywordColumn
		// };
		// this.RECORD_DATATYPE = {
		// 	handle: String
		// };

		this.records = [];

		this.state = {documents:[]};

		this.debounced_linkState = _.debounce(this.linkState,30);

		this.selectionKeySet.addGroupedCallback(this, this.dataChanged);
		this.probeKeySet.addGroupedCallback(this, this.forceUpdate);
		//this.keywordColumn.addGroupedCallback(this, this.dataChanged, true);
	}

	dataChanged()
	{
		//this.records = weavejs.data.ColumnUtils.getRecords(this.RECORD_FORMAT, this.selectionKeySet.keys, this.RECORD_DATATYPE);

		let idProperty = '';
		var ds = weave.getObject("CSV file");
		var columnNames = ds.getColumnNames();
		var columns = columnNames.map((name) => ds.getColumnByName(name));

		var format:any = _.zipObject(columnNames, columns);
		format[idProperty] = weavejs.api.data.IQualifiedKey;

		this.records = weavejs.data.ColumnUtils.getRecords(format, this.selectionKeySet.keys, String);

		if(this.records && this.records[0])
			this.keyword.value = this.records[0][this.keywordColumn.value];

		if(Weave.detectChange(this,this.keyword)){
			this.apiParams = {
				"q.enriched.url.enrichedTitle.keywords.keyword.text":this.keyword.value,
				"return":"enriched.url.url,enriched.url.title,enriched.url.image,enriched.url.publicationDate.date,enriched.url.text,enriched.url.author,enriched.url.enrichedTitle.keywords.keyword.text,enriched.url.enrichedTitle.keywords.keyword.sentiment.score,enriched.url.enrichedTitle.entities.entity.text,enriched.url.enrichedTitle.entities.entity.sentiment.score,enriched.url.enrichedTitle.docSentiment.score",
				"start":"now-1d",
				"end":"now",
				"count":this.count.value
			};
			AlchemyAPIUtils.alchemyAPICall(this.alchemyAPIKey.value,
				this.alchemyAPIMethodURL.value,
				this.apiParams,
				(documents) => {this.setState({documents})},
				(response) => {console.log("Failure",response);this.setState({documents:defaultDocuments})}
			);
		}
	}

	componentDidMount () {

		this.element = ReactDOM.findDOMNode(this);
		this.debounced_linkState();

	}

	componentDidUpdate() {
	}

	linkState() {
		if(!weave.getObject("ScatterPlotTool","filteredKeySet") || !weave.getObject("CSV file"))
			return this.debounced_linkState();
		Weave.linkState(weave.getObject("defaultSelectionKeySet"),this.selectionKeySet);
		Weave.linkState(weave.getObject("defaultProbeKeySet"),this.probeKeySet);
		this.filteredKeySet = weave.getObject(["ScatterPlotTool","filteredKeySet"]);
		//var csv = weave.getObject("2015-2016_NBA_Media.csv");
		//this.keywordColumn = csv.getAttributeColumn(csv.getColumnMetadata("Player")).getInternalColumn();
	}

	componentWillUnmount() {

	}

	 getFormattedDate(date) {
		var month = date.getMonth() + 1;
		var day = date.getDate();
		var year = date .getFullYear();
		return month + "-" + day + "-" + year;
	}

	render(){
		return(
			<VBox style={{flex:1, overflow:"auto", border:"2px solid gray", borderRadius:5}}>
				<div className="ui feed">
					{this.state.documents.map( (document,index) => {
						var title = document.source.enriched.url.title;
						var url = document.source.enriched.url.url;
						var image = document.source.enriched.url.image;
						var pubDate = document.source.enriched.url.publicationDate.date;
						var previewText = document.source.enriched.url.text;
						var author = document.source.enriched.url.author;
						var keywords = document.source.enriched.url.enrichedTitle.keywords;
						var entities = document.source.enriched.url.enrichedTitle.entities;
						var topEntities = [];
						var bottomEntities = [];
						var documentSentiment = d3.round(document.source.enriched.url.enrichedTitle.docSentiment.score,4);
						if(entities && entities.length) {
							entities.sort(function(a, b) {
								return b.sentiment.score - a.sentiment.score;
							});
							var topEntities = entities.slice(0,3);
							var bottomEntities = entities.slice(-3);
						}
						return (<div key={index} className="event">
							<div className="label">
								<img src={image}/>
							</div>
							<div className="content">
								<div className="summary">
									{title}
									<div className="date">
										{pubDate}
									</div>
									{author ? <br/>:""}
									{author}
								</div>
								<div className="meta">
									<a className="like" href={url}>
										<i className="Newspaper icon"/>
									</a>
								</div>
								<div className="extra text">
									{previewText}
									{/*<D3WordCloud style={{height:300,width:300}}
										words={entities.map( (entity,index) => {
											return {text: entity.text, size:entity.sentiment.score}
										})
									}/>*/}
									<br/>
									<div className="ui statistic" style={{width:"100%"}}>
										<div className="label">
											Overall Sentiment
										</div>
										<div className="value">
											{documentSentiment}
										</div>
									</div>

									<div className="ui mini statistic">
										<div className="label">
											Positive Sentiment
										</div>
										<br/>
										<div className="value">
											<div className="ui three mini statistics">
												{topEntities.map( (entity,index) => {
													return (
														<div className="mini statistic" key={index}>
															<div className="value">
																{d3.round(entity.sentiment.score,4)}
															</div>
															<div className="ui mini label">
																{entity.text}
															</div>
														</div>
													)
												})}
											</div>
										</div>
									</div>
									<br/>
									<div className="ui mini statistic">
										<div className="label">
											Negative Sentiment
										</div>
										<br/>
										<div className="value">
											<div className="ui three mini statistics">
												{bottomEntities.map( (entity,index) => {
													return (
														<div className="mini statistic" key={index}>
															<div className="value">
																{d3.round(entity.sentiment.score,4)}
															</div>
															<div className="ui mini label">
																{entity.text}
															</div>
														</div>
													)
												})}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>)
					})}
					</div>
			</VBox>);
	}
}

Weave.registerClass(
	AlchemyAPINewsTool,
	["weavejs.tool.AlchemyAPINewsTool", "weave.visualization.tools::AlchemyAPINewsTool"],
	[weavejs.api.ui.IVisTool_Basic, weavejs.api.core.ILinkableObjectWithNewProperties],
	"Alchemy API News Tool"
);