"use strict";

var projects = [];

function Project(rawData) {
  this.title = rawData.title;
  this.description = rawData.description;
  this.imgSrc = rawData.imgSrc;
  this.date = rawData.publishedOn;
  this.link = rawData.link;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.find('h1').text(this.title);
  $newProject.find('body').html(this.body);
  $newProject.find('img').attr("src", this.image);
  $newProject.find('span.pubdate').text(this.date);
  $newProject.find('a.link').html(this.link);
  $newProject.find('a.link').attr("href", this.link);
  $newProject.find('article').attr("data-category", this.category);
  $newProject.find('article').attr("id", "data");
  return $newProject;
}

rawData.forEach(function(projectObj) {
  projects.push(new Project(projectObj));
});

projects.forEach(function(project) {
  $('#article').append(project.toHtml());
});


var handleNavBar = function() {
  $('section').on('click', function(){
    $('.data').hide();
    $('.template').hide();
    var dataCat = $(this).attr('data-category');
    $('#' + dataCat + ".template").show();
    $('#' + dataCat).show();
    console.log($(this).attr('data-category'));
  }
)};

$(document).ready(function() {
  handleNavBar();
});
