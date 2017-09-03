'use strict';

var repos = repos || [];
var Article = Article || {};

Article.handleNavBar = function() {
  $('section').on('click', function(){
    $('.data').hide();
    var dataCat = $(this).attr('data-category');
    $('.data[id="' + dataCat + '"]').show();
    console.log($(this).attr('data-category'));
  }
)};
