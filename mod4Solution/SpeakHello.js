(function(somewindow){
var helloSpeaker = {};
var speakWord = "Hello";
helloSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}
somewindow.helloSpeaker = helloSpeaker;
})(window);


