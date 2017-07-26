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
