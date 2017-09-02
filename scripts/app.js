"use strict";

var app = app || {};

var repos = [];

function Article (input){
  this.name = input.name;
  this.update = input.updated_at;
  this.url = input.url;
  this.ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
}

Article.prototype.toHtml = function() {
  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);
  return template(this);
}

repos.forEach(function(input) {
  $('#handlebars-entry').append(input.toHtml());
});

Article.handleNavBar = function() {
  $('section').on('click', function(){
    $('.data').hide();
    var dataCat = $(this).attr('data-category');
    $('.data[id="' + dataCat + '"]').show();
    console.log($(this).attr('data-category'));
  }
)}
