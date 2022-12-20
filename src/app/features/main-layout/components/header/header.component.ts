import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService

  ) { }

  ngOnInit(): void {
  }

  get userIsAuthenticated(){
    return this.authService.token
  }
  logOut(){
    this.authService.logOut()
    
  }
}
