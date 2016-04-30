# 91-514-f16-project
Project for 91.514 Internet and Web Systems II, Spring 2016

This project includes tools to integrate twitter, news, video and simple analytics with the open source project Weave (www.iweave.com). The included demo contains data from the 2015-2016 NBA season showcasing the top players in the league. Semi-structured data from twitter and various news sources is displayed alongside structured data. Interaction is coordinated between the visualizations (using weavejs libraries) and twitter/news tools (my novel contribution). When a user selects any of the structured data, relevent twitter and news stories are displayed to the user. In addition to these tools, I have utilized the alchemyAPI (http://www.alchemyapi.com/) powered by IBM's watson, to incorporate sentiment analysis of the included news articles. 

Build this project using
  1. npm install
  2. grunt


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
