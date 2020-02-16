import { Component, OnInit } from '@angular/core';
import { fader } from '../route-animation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})


export class StatsComponent implements OnInit {

  show = true;

  constructor() { }

  ngOnInit() {

  }

  hide() {
    this.show = false;
  }

}
