'use strict';

var repos = repos || [];

(function(module){
  $.ajax({
    dataType: "json",
    url: 'https://api.github.com/users/rowenscout/repos',
  }).then(response => {
    console.log(response);
    response.map(eachRepo => {
      module.push(new Article(eachRepo))
    });
    module.forEach(function(input) {
      $('#handlebars-entry').append(input.toHtml());
    });
  });
})(repos);

var wordstring = repos.reduce(function(sum, word) {
  return sum + word.ipsum;
})

//this method of counting words was written by github user bradoyler.
//it can be found here https://gist.github.com/bradoyler/5610057
//it's used here to count the number of words in each of my articles and return
// and object with the wordcount to the console.
var wordscount = wordstring.replace(/[^\w\s]/g, "").split(/\s+/).reduce(function(map, word){
  map[word] = (map[word]||0)+1;
  return map;
}, Object.create(null))
console.log(wordscount)
