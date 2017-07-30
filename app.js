"use strict";

var projects = [];

function Project(name, description, imgSrc, date) {
  this.name = name;
  this.description = description;
  this.imgSrc = imgSrc;
  this.date = date;
  projects.push(this);
}

function print (input) {
  //jquery magic goes here
}

function superPrint (input) {
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
