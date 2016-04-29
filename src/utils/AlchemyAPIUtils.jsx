/**
 * This class contains
 * Alchemy API Utils
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

export default class AlchemyAPIUtils
{

	static alchemyAPICall(apiKey, apiMethodURL, apiParams, successCallback, failureCallback)
	{
		console.log("API Call");
		$.ajax({
			url: apiMethodURL,
			dataType: 'jsonp',
			jsonp: 'jsonp',
			type: "post",
			data: _.merge({ apikey: apiKey, outputMode: 'json' },apiParams),
			success:(response) => {
				if (response["status"] === "OK") {
					console.log("Success",response);
					successCallback(response["result"]["docs"]);
				}
				else if (response["status"] === "ERROR") {
					console.log("Failure");
					failureCallback(response);
				}
			},
			error: function(err) {
				console.log("Failure");
				failureCallback(err);
			}
		});
	}
}