"use strict";

var projects = [];

function Project(rawData) {
  this.title = rawData.title;
  this.description = rawData.description;
  this.imgSrc = rawData.imgSrc;
  this.date = rawData.date;
  projects.push(this);
}

var handleNavBar = function() {
  $('section').on('click', function(){
    $('.data').hide();
    var dataCat = $(this).attr('data-category');
    //$('".' + $(this).attr('data-category')) + '"'.show();
    $('.data[id="' + dataCat + '"]').show();
    console.log($(this).attr('data-category'));
  }
)};

$(document).ready(function() {
  handleNavBar();
});
