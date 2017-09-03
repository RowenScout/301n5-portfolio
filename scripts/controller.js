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
      module.forEach(function(input) {
        $('#handlebars-entry').append(input.toHtml());
      });
    });
  });
})(repos);
