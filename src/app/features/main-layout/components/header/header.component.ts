import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, CartService } from 'src/app/core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartCount$: Observable<number> = this.cartService.cartCount$;
  searchInput: any

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  get userIsAuthenticated(){
    return this.authService.token
  }
  logOut(){
    this.authService.logOut()
  }
  search($event: any){
    this.router.navigate(['/main-products'], {queryParams: {search: $event}})

  }
}
