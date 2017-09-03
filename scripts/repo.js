'use strict';

var app = app || {};

$.ajax({
  dataType: "json",
  url: 'https://api.github.com/users/rowenscout/repos',
}).then(response => {
  console.log(response);
  response.map(eachRepo => {
    repos.push(new Article(eachRepo))
    repos.forEach(function(input) {
      $('#handlebars-entry').append(input.toHtml());
    })
  })
})
