import { Component, OnInit } from '@angular/core';
import * as angular from "angular";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

angular.module("myApp", [])

.controller('mainCtrl', function($scope, getTechCrunchArticles, getArsTechnicaArticles){
  
  // $scope.getNewsArticles = getArticles.getNewsArticles;
  
  getTechCrunchArticles.getNewsArticles(function(response){
    $scope.articles = response.data.articles;   
  });
  
  getArsTechnicaArticles.getNewsArticles(function(response){
    $scope.articlesArs = response.data.articles;
  });
  
  
})


.service('getTechCrunchArticles', function($http){
   this.getNewsArticles = function(callback){
  $http.get('https://newsapi.org/v1/articles?source=techcrunch&apiKey=70265f43c252417a841c76dbf243d7e6')
     .then(callback);
     //inside services
     
   };
 })

.service('getArsTechnicaArticles', function($http){
   this.getNewsArticles = function(callback){
  $http.get('https://newsapi.org/v1/articles?source=ars-technica&apiKey=70265f43c252417a841c76dbf243d7e6')
     .then(callback);
   };
 })

.service('getIGNArticles', function($http){
   this.getNewsArticles = function(callback){
  $http.get('https://newsapi.org/v1/articles?source=ign&sortBy=top&apiKey=70265f43c252417a841c76dbf243d7e6')
     .then(callback);
   };
 })




