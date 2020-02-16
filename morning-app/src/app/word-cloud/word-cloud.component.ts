import { Component, OnInit } from '@angular/core';
import *  as  data from '../../data/words.json';
import { UserService } from '../services/user.service';
import { Session } from '../model/session';
import { SessionService } from '../services/session.service.js';
import { Router } from '@angular/router';
declare const CircleManager: any;

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.scss']
})
export class WordCloudComponent implements OnInit {

  constructor(public userService: UserService, public sessionService: SessionService, public router: Router) { }

  clicks = 0;
  show = true;
  circleManager = null;
  currentUser = null;
  pos_words = null;
  neg_words = null;

  ngOnInit() {

    this.pos_words = this.randomWordSeed(data.positive, 14);
    this.neg_words = this.randomWordSeed(data.negative, 14);

    this.currentUser = JSON.parse(localStorage.getItem('user'));

    this.circleManager = new CircleManager('container');

    this.addWords(this.circleManager, this.pos_words);
    this.addWords(this.circleManager, this.neg_words);

  }

  clicked() {
    this.clicks++;
    
    if (this.clicks == 25) {
      this.show = false;
      this.createNewSession(this.circleManager.getPicked())
      this.router.navigateByUrl('/stats');
    }
  }

  createNewSession(picked) {

    let newSession = new Session();

    newSession.user_id = this.currentUser.id;
    newSession.pos_words = []; 
    newSession.pos_words = [];

    picked.forEach(word => {
      if (this.pos_words.includes(word) && !newSession.pos_words.includes(word)) {
        newSession.pos_words.push(word);
      } else if (this.neg_words.includes(word) && !newSession.neg_words.includes(word)) {
        newSession.neg_words.push(word);
      }
    });

    newSession.date = new Date(Date.now()).toISOString();

    this.sessionService.AddSession(newSession);
  }

  addWords(circleManager, words) {
    words.forEach(word => {
      circleManager.add(word);
    });
  }

  randomWordSeed(words, total) {

    let wordIndices = this.randomNumbers(total, words.length);

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
