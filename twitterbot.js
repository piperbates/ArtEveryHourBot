const cors = require("cors")
const request = require("request");
createIsCool = require("iscool");
let Twit = require("twit");
let T = new Twit(require("./config.js"));

baseQuoteUrl = "https://api.kanye.rest";
// getquoteUrl = baseNounUrl + require().key;

isCool = createIsCool();

function tweetWord(){
  console.log("Hi")
    // T.post("statuses/update"), {status: quote}, function(err, reply){
    //     if(err){
    //         console.log("error:", err);
    //     } else {
    //         console.log("Tweet:", reply)
    //     }
    // }
}

function tweetQuote() {
  let quote = "",
    tweet = "The ",
    fruitsting;

  request(baseQuoteUrl, function (err, res, data) {
    let quoteData = JSON.parse(data);
    console.log(quoteData.quote)
    if (!err) {
      quote = quoteData.quote;
      if (isCool(quote) && !quote[0].toUpperCase()) {
        fruitstring = quote + "berries";
        tweet += fruitstring + " taste like " + fruitstring + "!";
        // console.log(tweet);
        tweetWord(tweet)
        return;
      } else {
        // console.log("hi")
        // tweetQuote();
      }
    }
  });
}
tweetQuote()