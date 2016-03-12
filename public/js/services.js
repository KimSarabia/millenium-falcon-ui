'use strict';

var app = angular.module('routingApp');

app.service('SwapiService', function($http) {

  this.pages = [];
  this.getPeople = page => {
    page = page || 1;
    if(!this.pages[page]) {
      $http.get(`http://swapi.co/api/people/?page=${page}`)
      .then(res => {
        if(!this.count) {
          this.count = res.data.count;
          this.totalPages = Math.ceil(this.count / 10);
          this.pageNumbers = Array(this.totalPages).fill(1).map(function(item, index) {
            return index + 1;
          });
        }
        // SwapiService.people
        this.pages[page] = res.data.results;
      }, err => {
        console.error('SwapiService error:', err);
      });
    }
  };
});
