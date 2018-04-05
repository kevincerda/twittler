/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */

// set up data structures
window.streams = {};
streams.home = [];
streams.users = {};
streams.users.shawndrost = [];
streams.users.sharksforcheap = [];
streams.users.sallycodenaji = [];
streams.users.pablocalhoun = [];
streams.users.visitor = [];
window.users = Object.keys(streams.users);

// utility function for adding tweets to our data structures
var addTweet = function(newTweet){
  var username = newTweet.user;
  streams.users[username].push(newTweet);
  streams.home.push(newTweet);
};

// utility function
var randomElement = function(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// random tweet generator
var opening = ['just', 'you know that thing when you', 'Everytime my driver talks about how she', 'like when Hack Reactor', 'bro...', 'ask me how i', 'completely', 'Nearly', 'productively', 'Efficiently', 'last night i', 'the president', 'that mage', 'A ninja', 'a seedy old man'];
var verbs = ['downloaded', 'aped', 'lolled at', 'interfaced', 'deployed', 'smelled', 'ordered', 'killed', 'developed', 'built', 'invented', 'murdered out', 'experienced', 'navigated', 'aided', 'congratumalated', 'enjoyed', 'flattered', 'gasped', 'flipped', 'engineered', 'installed', 'refactored', 'debugged', 'delegated', 'automated', 'formulated', 'systematized', 'overhauled', 'computed'];
var objects = ['my', 'your', 'the', 'a', 'my', 'this', 'that', 'the', 'the big', 'a new form of', 'the entire', 'a whole', 'all of the'];
var nouns = ['cat', 'yoo-hoo', 'system', 'salad', 'casserole', 'pizza', 'nose','city', 'gastropub', 'swig of booze', 'worm', 'cloud', 'potato', 'cartoon for grown-ups', 'money', 'way of life', 'my family\'s belief system', 'night-life', 'security system', 'carton of milk', 'bad decision', 'future', 'life', 'pony', 'mind', 'mac', 'bootcamp', 'sprint', 'git'];
var tags = ['#techlife #devsarepeopletoo', '#burningman', '#sf', '#onfleek', '#clutch', '#foodie', '#theworm', 'but only i know how #mylittlesecret', 'for real', '#sxsw', '#ballin', '#omg', '#yolo', '#magic', '#truthordare', '#mansplaining', '#Merica', '#firstworldprobs', '#blessed', '#yass', '#lifein2018', '#themoreyouknow', '#gangnamstyle #koreanmusic', '#rigoddamndiculous'];

var randomMessage = function(){
  return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(tags)].join(' ');
};

// generate random tweets on a random schedule
var generateRandomTweet = function(){
  var tweet = {};
  tweet.user = randomElement(users);
  tweet.message = randomMessage();
  tweet.created_at = Math.round((new Date()).getTime() / 1000).toString(10);
  addTweet(tweet);
};

for(var i = 0; i < 10; i++){
  generateRandomTweet();
}

var scheduleNextTweet = function(){
  generateRandomTweet();
  setTimeout(scheduleNextTweet, Math.random() * 1500);
};
scheduleNextTweet();

// utility function for letting students add "write a tweet" functionality
// (note: not used by the rest of this file.)
var writeTweet = function(message){
  // if(!streams.users.visitor){
  //   throw new Error('set the global visitor property!');
  // }
  var tweet = {};
  tweet.user = visitor;
  tweet.message = message;
  tweet.created_at = Math.round((new Date()).getTime() / 1000).toString(10);
  addTweet(tweet);
}