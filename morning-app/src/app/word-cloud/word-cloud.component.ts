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

    let circleManager = new CircleManager('container');
    circleManager.add("Hello there!Hello there!Hello there!Hello there!Hello there!Hello there!Hello there!Hello there!");
    circleManager.add("Hello there!");
    circleManager.add("Hello there!");
    circleManager.add("Hello there!");
    circleManager.add("Hello there!");
 
  }

}
