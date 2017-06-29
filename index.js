'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = "";

var SKILL_NAME = "Tea Facts";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "You can say tell me a Tea fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "The tea bag was invented in 1908 on accident by an American named Thomas Sullivan. He packaged small samples of tea in silk bags and his customers thought they were supposed to dunk the bag itself.",
    "There are four major tea types - black, green, white, and oolong. However, they all come from one plant, Camellia sinensis. The plant's processing is what changes its flavor.",
    "Tea is the second most popular beverage in the world. The most drink popular being water.",
    "There are an estimated 1500 different types of tea.",
    "China is the world's largest producer of tea",
    "An estimated 85% of tea that is consumed in the United States is iced.",
    "The Lipton Tea Factory in Jebel Ali, Dubai, produces 5 billion tea bags a year.",
    "Black tea undergoes the longest process of oxidation. White tea undergoes the shortest.",
    "Over 3 million tons of tea is produced every year worldwide.",
    "It takes around four to 12 years for a tea plant to produce seed. It takes about three years before a new plant is ready to harvest",
    "Tea plants need at least 50 inches of rain a year.",
    "Black tea is called “red tea” in China.",
    "More than 200 cups of tea can be brewed from one pound of loose tea leaves.",
    "Tea contains polyphenols that repair cells and help our bodies fend off cardiovascular diseases, cancers, and diabetes.",
    "It takes around 2000 tiny leaves to make one pound of finished tea.",
    "Tea is grown in the United States. There are plantations off the coast of South Carolina and in Hawaii.",
    "You won't feel as big of a caffeine crash when drinking tea because of its high antioxidant content slows the absorbtion of caffeine.",
    "It is best to store tea far away from other spices because strong aromas will impact the flavor of tea.",
    "Americans tasted iced tea for the first time at the 1904 World's Fair in St. Louis.",
    "Tea can be paired with food just like wine.",
    "Green tea should be steeped at 175 to 185 degrees fahrenheit. Higher temperatures cook the delicate leaves and make the resulting tea bitter.",
    "Tea didn't reach the Europeans until the late 16th century.",
    "The United Arab Emirates are the largest consumers of tea. Each person drinks nearly 14 pounds of tea every year.",
    "The most expensive tea is grown in Sichuan province in China. The tea bushes are hand fertilized with the waste from local pandas. The tea costs about $200 per small cup.",
    "The name Oolong tea comes from the Chinese name Wu Long which translates to Black Dragon.",
    "Teas that do not come from the plant Camellia sinensis are known as Tisanes or Herbal teas.",
    "The largest tea bag recorded by the Guinness World Records weighed in at over 551 pounds and measured 9.8 feet wide and 13 feet high.",
    "The largest recorded cup of tea was 10 feet tall by 8 feet wide.",
    "Over 3 billion cups of tea are drunk every year."
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};