require("dotenv").config();

console.log("Starting");
const Twit = require("twit");
const config = require("./config");

let T = new Twit(config);

function tweetIt() {
  let getParams = {
    q: "#art", //can change the query that is searched for / RT'd
    count: 1, //can change the amount of tweets to get from pull
    include_entities: true,
  };

  T.get(`search/tweets`, getParams, sendTweet); //Gets a tweet

  //Pulls specific data out of the above tweet.
  function sendTweet(err, data, res) {
    let tweets = data.statuses[0]; //in case we want to use the tweet for anything else down the line
    if (tweets) {
      let id = tweets.id_str; //We want the specific tweet id

      T.post(`statuses/retweet/${id}`, (err, data, res) => {
        if (err) {
          console.log("error: " + err);
        } else {
          console.log("Success");
        }
      });
    } else {
      console.log("error: " + err);
    }
  }
}

// setInterval(tweetIt, 1000 * 60) //runs tweetIt once an hour, once this is posted to a server.
tweetIt();
