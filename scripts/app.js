"use strict";

var app = app || {};

(function(module) {
  module.prototype.toHtml = function() {
    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);
    return template(this);
  }

  module.handleNavBar = function() {
    $('section').on('click', function(){
      $('.data').hide();
      var dataCat = $(this).attr('data-category');
      $('.data[id="' + dataCat + '"]').show();
      console.log($(this).attr('data-category'));
    }
  )};

  // module.fetch = function() {
  //   if (localStorage.rawData) {
  //     repo.push(JSON.parse(localStorage.rawData));
  //   } else {
  //     $.getJSON('scripts/rawData.json', function (result){
  //       localStorage.rawData = JSON.stringify(result);
  //       projects.push(JSON.parse(localStorage.rawData));
  //     });
  //   }
  // }

  // function load (rawJson){
  //   repo.map(function(foo) {
  //     projects.push(new Project(foo));
  //   })
  // }

  $(document).ready(function() {
    load(JSON.parse(localStorage.rawData));
    module.forEach(function(project) {
      $('#projects').append(module.toHtml());
    });

    module.handleNavBar();
  });
})(app);
