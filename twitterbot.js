require('dotenv').config();

console.log("Starting");
const Twit = require("twit");
const config = require("./config");

let T = new Twit(config);

function tweetIt() {
  let getParams = {
    q: "#art", //can change the query that is searched for / RT'd
    count: 1, //can change the amount of tweets to get from pull
  };

  T.get(`search/tweets`, getParams, sendTweet); //Gets a tweet

  //Pulls specific data out of the above tweet.
  function sendTweet(err, data, res) {
    let tweets = data.statuses;
    let id = tweets[0].id_str; //We want the specific tweet id

    T.post(`statuses/retweet/${id}`, (err, data, res) => {
      if (err) {
        console.log("error: " + err);
      } else {
        console.log(data);
      }
    });
  }
}

setInterval(tweetIt, 1000 * 60) //runs tweetIt once an hour, once this is posted to a server.
// tweetIt()