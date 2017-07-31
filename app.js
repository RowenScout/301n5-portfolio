"use strict";

var projects = [];

function Project(rawData) {
  this.title = rawData.title;
  this.description = rawData.description;
  this.imgSrc = rawData.imgSrc;
  this.date = rawData.date;
  projects.push(this);
}

function print (input) {
  //jquery magic goes here
}

function superPrint () {
  for (var i = 0; i < projects.length; i++) {
    print(i)
  }
}

//standard jquery syntax
$(document).ready(function(){
  //code
  //$('element, ID or class').function('argument', 'argument');
})

$(function(){
  //codez
})

//short arrow functon
$(() => {
  $('p').css('background-color', '#6660aa');
})
