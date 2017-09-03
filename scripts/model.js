"use strict";

var repos = [];

var ipsumRaw = $.ajax({
  'url': "data/ipsum.json",
  'success': function(json) {
    console.log(json);
    console.log(json.responseText);
    return(json.responseText)
  }
});

function Article (input){
  this.name = input.name;
  this.update = input.updated_at;
  this.url = input.url;
  this.ipsum = JSON.parse(ipsumRaw.responseText)[0].ipsum;
}

Article.prototype.toHtml = function() {
  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);
  return template(this);
};

var doppelterMorder = repos.reduce(function(foo, bar){
  if (foo.indexOf(bar) < 0 ) {
    foo.push(bar)
  }
  return foo;
},[])
