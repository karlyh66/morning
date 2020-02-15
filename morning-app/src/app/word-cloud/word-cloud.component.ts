import { Component, OnInit } from '@angular/core';
import  *  as  data  from 'src/data/words.json';
declare const CircleManager: any;

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.scss']
})
export class WordCloudComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let pos_words = this.randomWordSeed(data.positive, 14);
    let neg_words = this.randomWordSeed(data.negative, 14);

    let circleManager = new CircleManager('container');
    this.addWords(circleManager, pos_words);
    this.addWords(circleManager, neg_words);
  }

  addWords(circleManager, words) {
    words.forEach(word => {
      circleManager.add(word);
    });
  }

  randomWordSeed(words, total) {

    let wordIndices  = this.randomNumbers(total, words.length);

    console.log(wordIndices);

    let word_list = []

    wordIndices.forEach(item => {
      word_list.push(words[item])
    });

    return word_list;
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
