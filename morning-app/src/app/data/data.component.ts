import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  (function(){

  var app = angular.module('graphs',[]);

  app.controller('graphController', function($scope){

  	//graph variables
	$scope.width = 600;
	$scope.height = 400;
	$scope.yAxis = "Mood";
	$scope.xAxis = "Day";

	$scope.data = [
		{
			label: 'January 1, 2020',
			value: 8
		}, 
		{
			label: 'January 2, 2020',
			value: 5
		},
		{
			label: 'January 3, 2020',
			value: 6
		},
		{
			label: 'January 4, 2020',
			value: 3
		},
		{
			label: 'January 5, 2020',
			value: 9
		},
		{
			label: 'January 6, 2020',
			value: 4
		},
		{
			label: 'January 7, 2020',
			value: 5
		},
		{
			label: 'January 8, 2020',
			value: 4
		},
		{
			label: 'January 9, 2020',
			value: 6
		},
	];

	//add new data points and do sentiment analysis
	$scope.newWord = "FILLER WORD";
	$scope.date = "FILLER DATE";

	var Sentiment = require('sentiment');
	var sentiment = new Sentiment();
	var result = sentiment.analyze(newWord);

	data[date] = result;

	//find maximum value, to be used for scaling graph later
	$scope.max = 0;
	var arrLength = $scope.data.length;
	for (var i = 0; i < arrLength; i++) {
		if ($scope.data[i].value > $scope.max)
			$scope.max = $scope.data[i].value;
	}

  });

})();

}
