'use strict';

var app = app || {};

$.ajax({
  url: 'https://api.github.com/users/rowenscout/repos',
  method: 'GET'
}).then(response => {
  console.log(response);
  response.map(eachRepo => {
    repos.push(new Article(eachRepo))
    repos.forEach(function(input) {
      $('#handlebars-entry').append(input.toHtml());
    })
  })
})
