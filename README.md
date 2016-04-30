# 91-514-f16-project

NBA Analytics Dashboard: Structured and Semi-structured Data Exploration and Analysis Tool

Project for 91.514 Internet and Web Systems II, Spring 2016

This project includes tools to integrate twitter, news, video and simple analytics with the open source project Weave (www.iweave.com). The included demo contains data from the 2015-2016 NBA season showcasing the top players in the league. Semi-structured data from twitter and various news sources is displayed alongside structured data. Interaction is coordinated between the visualizations (using weavejs libraries) and twitter/news tools (my novel contribution). When a user selects any of the structured data, relevent twitter and news stories are displayed to the user. In addition to these tools, I have utilized the alchemyAPI (http://www.alchemyapi.com/) powered by IBM's watson, to incorporate sentiment analysis of the streamed news articles. The application not only supports text tweets, but also supports streaming video and vine tweets.

An example of this project is hosted at the following sites:
<br/>
http://www.cs.uml.edu/~zmaybury/514s2016/project/
<br/>
http://example.iweave.com/~zmaybury/IWS2/

This demo is meant for use with high resolution screens. You may need to zoom out your browser to have enough room to display visualizations.

Build this project using
  1. npm install
  2. grunt

Outside Libraries Used:
WeaveJS (www.iweave.com)
Seamntic UI (www.semantic-ui.com)
Twitter Widgets (https://dev.twitter.com/web/javascript)
Alchemy API (http://www.alchemyapi.com)

Initial dashboard view, showing structured data and visualizations, twitter feeds for related subjects, related news stories, and their overall sentiment scores.
![alt tag](https://github.com/zmaybury/91-514-f16-project/blob/master/images/Demo.png)


Dashboard with Warriors guard Steph Curry selected. After selecting his point in the scatter plot, Steph's twitter feed, the feed of his team, and the feed for the arena he plays in have been brought into the dashboard to provide the user with subsequent information.
![alt tag](https://github.com/zmaybury/91-514-f16-project/blob/master/images/Demo_Curry_Selection.png)


Dashboard with Clippers guard Chris Paul selected. In this dashboard, relevent news stories have been brought into the dashboard. Paul recently broke his hand, hurting the playoff chances of the team, and the negative sentiment around the related news stories echo's this sentiment. When news stories are loaded, the top story is relevent to the player, the second story is relevent to the player's team, the third story is relevent to the city the team is located in.
![alt tag](https://github.com/zmaybury/91-514-f16-project/blob/master/images/Demo_Paul_Selection_Recent_Injury_Negative.png)
  

Close up view of news sentiment analysis tool. Notice the positive sentiment related to Charles Barkley picking Cleveland to win the finals and the negative sentiment related to the referreeing in recent games.<br/> 
![alt tag](https://github.com/zmaybury/91-514-f16-project/blob/master/images/News_Sentiment_Analysis.png)


The Dashboard supports multi-select, and will show linking across all simple visualizations, as well as pull in any relevent news or tweets involving the selected players.
![alt tag](https://github.com/zmaybury/91-514-f16-project/blob/master/images/Demo_Multi_Select.png)


Close up view of structured data visualization dashboard.
![alt tag](https://github.com/zmaybury/91-514-f16-project/blob/master/images/Structured_Data_Dashboard.png)
