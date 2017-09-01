'use strict';
var app = app || {};

$.ajax({
  url: 'https://api.github.com/users/:rowenscout/repos',
  method: 'GET',
}).then(foo => {foo.forEach(bar => {app.push(bar)})});
// (function(module) {
//   const repo = {};
//
//   module.all = [];
//
//   module.requestRepos = function(callbck) {
//     JSON.PARSE($.ajax({
//       url: 'https://api.github.com/users/rowenscout/repos',
//       method: 'GET',
//     }))
//     .then(foo => {foo.forEach(bar => module.all.push(JSON.parse(bar)))}),
//     err => {console.error(err)}
//     callbck();
// //   }
// })(app)
