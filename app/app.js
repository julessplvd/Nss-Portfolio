'use strict';

let jules = angular.module("Jules", ["ngRoute"]);

jules.config(($routeProvider)=>{
  $routeProvider
  .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
  })  
  .when('/portfolio', {
      templateUrl: 'partials/portfolio.html',
      controller: 'PortfolioController'
  })  
  .when('/about', {
      templateUrl: 'partials/about.html',
      controller: 'AboutController'
  })  
  .when('/resume', {
      templateUrl: 'partials/resume.html',
      controller: 'ResumeController'
  })  
  .when('/blog', {
      templateUrl: 'partials/blog.html',
      controller: 'BlogController'
  })
  .when('/contact', {
      templateUrl: 'partials/contact.html',
      controller: 'ContactController'
  })  
  .otherwise('/');
});