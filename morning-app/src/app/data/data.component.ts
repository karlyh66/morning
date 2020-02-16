
import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})

export class DataComponent {
  title = 'Average Temperatures of Cities';
   type = 'LineChart';
   data = [
      ["Jan",  7.0, -0.2, -0.9, 3.9],
      ["Feb",  6.9, 0.8, 0.6, 4.2],
      ["Mar",  9.5,  5.7, 3.5, 5.7],
      ["Apr",  14.5, 11.3, 8.4, 8.5],
      ["May",  18.2, 17.0, 13.5, 11.9],
      ["Jun",  21.5, 22.0, 17.0, 15.2],
      ["Jul",  25.2, 24.8, 18.6, 17.0],
      ["Aug",  26.5, 24.1, 17.9, 16.6],
      ["Sep",  23.3, 20.1, 14.3, 14.2],
      ["Oct",  18.3, 14.1, 9.0, 10.3],
      ["Nov",  13.9,  8.6, 3.9, 6.6],
      ["Dec",  9.6,  2.5,  1.0, 4.8]
   ];
   columnNames = ["Month", "Tokyo", "New York","Berlin", "Paris"];
   options = {   
      hAxis: {
         title: 'Month'
      },
      vAxis:{
         title: 'Temperature'
      },
   };
   width = 550;
   height = 400;
}
//   (function(){

//   var app = angular.module('myModule', ['chart.js']);

//   app.controller('LineCtrl', function($scope){

//   	//graph variables
// 	$scope.width = 600;
// 	$scope.height = 400;
// 	$scope.yAxis = "Mood";
// 	$scope.xAxis = "Day";

// 	$scope.data = [
// 		{
// 			label: 'January 1, 2020',
// 			value: 8
// 		}, 
// 		{
// 			label: 'January 2, 2020',
// 			value: 5
// 		},
// 		{
// 			label: 'January 3, 2020',
// 			value: 6
// 		},
// 		{
// 			label: 'January 4, 2020',
// 			value: 3
// 		},
// 		{
// 			label: 'January 5, 2020',
// 			value: 9
// 		},
// 		{
// 			label: 'January 6, 2020',
// 			value: 4
// 		},
// 		{
// 			label: 'January 7, 2020',
// 			value: 5
// 		},
// 		{
// 			label: 'January 8, 2020',
// 			value: 4
// 		},
// 		{
// 			label: 'January 9, 2020',
// 			value: 6
// 		},
// 	];

// 	//add new data points and do sentiment analysis
// 	$scope.newWord = "FILLER WORD";
// 	$scope.date = "FILLER DATE";

// 	var Sentiment = require('sentiment');
// 	var sentiment = new Sentiment();
// 	var result = sentiment.analyze(newWord);

// 	data[date] = result;

// 	//find maximum value, to be used for scaling graph later
// 	$scope.max = 0;
// 	var arrLength = $scope.data.length;
// 	for (var i = 0; i < arrLength; i++) {
// 		if ($scope.data[i].value > $scope.max)
// 			$scope.max = $scope.data[i].value;
// 	}

//   });

// })();