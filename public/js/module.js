'use strict'

var app = angular.module('myApp', ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home', {
   url: '/',
   templateUrl: '/html/home.html'
 })
 .state('about', {
  url: '/about',
  templateUrl: '/html/about.html',
  controller:'aboutCtrl'
})
  .state('peopleList',{
   url: '/people/:page',
   templateUrl: '/html/people.html',
   controller: 'listCtrl'
 })
 .state('swPerson', {
   url: '/person/:personId',
   template: '<h1>Person</h1>',
   controller: 'personCtrl'
 })


  $urlRouterProvider.otherwise('/');

});

app.run(function(SwapiService){
  SwapiService.getPeople();
})
