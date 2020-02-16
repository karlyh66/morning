import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { UserService } from "../services/user.service"
import { User } from '../model/user'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {


  constructor(public authService: AuthService, public router: Router, public userService: UserService) { }

  ngOnInit() {
  }

  googleLogin() {

    this.authService.GoogleAuth().then(res => {
      const currentUser: User = new User();
      const fbUser = res.user;

      if (res.additionalUserInfo.isNewUser) {
        currentUser.id = fbUser.uid;
        currentUser.name = fbUser.displayName;
        currentUser.email = fbUser.email;
        localStorage.setItem('user', JSON.stringify(currentUser));
        console.log(currentUser);
        this.userService.AddUser(currentUser);
        this.router.navigateByUrl('/home');
        //location.reload();
      } else {
        let user = this.userService.GetUser(fbUser.uid).valueChanges().subscribe(user => {
          sessionStorage.setItem('user', JSON.stringify(user));
          this.router.navigateByUrl('/home')
        });

      }
    }, err => {

    });

  }

}
