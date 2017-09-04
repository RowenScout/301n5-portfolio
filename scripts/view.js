'use strict';

var repos = repos || [];
var Article = Article || {};

Article.handleNavBar = function() {
  $('section').on('click', function(){
    $('.data').hide();
    $('.entry').hide();
    var dataCat = $(this).attr('data-category');
    $('#' + dataCat).show();
    console.log($(this).attr('data-category'));
  }
)};
