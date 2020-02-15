import { Component, OnInit } from '@angular/core';
declare const CircleManager: any;

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.scss']
})
export class WordCloudComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let words = this.randomNumbers(25, 1000);

    let circleManager = new CircleManager('container');
    circleManager.add("Hello there!Hello there!Hello there!Hello there!Hello there!Hello there!Hello there!Hello there!");
    circleManager.add("Hello there!");

  }

  randomNumbers(n, max) {
    var nums = [],
      randomNumber;

    for (var l = 0; l < n; l++) {
      do {
        randomNumber = Math.floor(Math.random() * max);
      } while (nums.includes(randomNumber));
      nums.push(randomNumber);
    }

    return nums;
  }


}
