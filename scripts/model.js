"use strict";

var repos = [];

var ipsumJSON = $.ajax({
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
  this.ipsum = JSON.parse(ipsumJSON.responseText)[0].ipsum;
}

Article.prototype.toHtml = function() {
  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);
  return template(this);
};
