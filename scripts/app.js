"use strict";

var projects = [];

function Project(rawData) {
  this.title = rawData.title;
  this.body = rawData.body;
  this.imgSrc = rawData.imgSrc;
  this.date = rawData.publishedOn;
  this.link = rawData.link;
}

Project.prototype.toHtml = function() {
  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);
}

var handleNavBar = function() {
  $('section').on('click', function(){
    $('.data').hide();
    var dataCat = $(this).attr('data-category');
    $('.data[id="' + dataCat + '"]').show();
    console.log($(this).attr('data-category'));
  }
)};

Project.fetch = function() {
  if (localStorage.rawData) {
    projects.push(JSON.parse(localStorage.rawData));
  } else {
    $.getJSON('scripts/rawData.json', function (result){
      localStorage.rawData = JSON.stringify(result);
      projects.push(JSON.parse(localStorage.rawData));
    });
  }
}

function load (rawJson){
  rawJson.map(function(foo) {
    projects.push(new Project(foo));
  })
}

$(document).ready(function() {
  load(JSON.parse(localStorage.rawData));
  projects.forEach(function(project) {
    $('#projects').append(project.toHtml());
  });

  handleNavBar();
});
