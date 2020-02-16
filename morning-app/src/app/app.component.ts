import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ // <-- add your animations here
    // fader,
    // slider,
    // transformer,
    fader
  ]
})
export class AppComponent {
  title = 'morning-app';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
