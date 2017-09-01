import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../core/services/login.service';
import { UserService } from '../../core/services/user.service';

/**
 * This class represents the navigation bar component.
 */
@Component({
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class NavbarComponent {

  constructor(private userService:UserService, private loginService:LoginService, private router:Router) { }

  logout($event) {
    $event.preventDefault();
    this.userService.clearUser();
    this.router.navigate(['']);
  }
}
