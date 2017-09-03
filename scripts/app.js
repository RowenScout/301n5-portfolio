"use strict";

var app = app || {};

var repos = [];

var ipsumRaw = $.ajax({
  'url': "data/ipsum.json",
  'success': function(json) {
    console.log(json);
    console.log(json.responseText);
    return(json.responseText)
  }
})

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

Article.handleNavBar = function() {
  $('section').on('click', function(){
    $('.data').hide();
    var dataCat = $(this).attr('data-category');
    $('.data[id="' + dataCat + '"]').show();
    console.log($(this).attr('data-category'));
  }
)}

Article.doppelganger = function(repos) {
  repos.reduce(acc, next => {
    if(acc===next){
      acc - next;
    }
  })
}
