/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
constructor(author, content, timeStamp, numberOfLikes, comments) {
  this.author = author;
  this.content = content;
  this.timeStamp = timeStamp;
  this.numberOfLikes = numberOfLikes;
  this.comments = comments;
}
addLikes() {
  this.numberOfLikes
}

addComment() {
  this.comments.push();
}
};

var tweet1 = new Tweet("Mia", "Dog image" "09/12/2020 9:03am", 567, ["Awwww!", "Nice hat buddy."]);
var tweet2 = new Tweet("Rudy", "Healthy snack recipe", "09/29/2016 7:54pm" 783473, ["Can I replace the milk to a plant based one?", "Yum, looks so good.", "Saving this for later, thanks!"]);

console.log(tweet1);
console.log(tweet2);

tweet1.addLikes();
console.log(tweet1);

tweet2.addComment();
console.log(tweet2);
