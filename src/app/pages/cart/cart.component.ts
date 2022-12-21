import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/core/interfaces';
import { CartService } from 'src/app/core/services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: Cart[] = []
  cartSum = 0

  constructor(
    private cartService:CartService
  ) { }

  ngOnInit(): void {
    this.getcarts()
  }

  getcarts(){
     this.cartService.getCarts()
     .pipe()
     .subscribe( res => {
       this.cartItems = res
       this.cartSum = this.cartItems.reduce((acc, item) => acc + item.total, 0)
     })
  }

  removeItem(item: Cart){
    return this.cartService.deleteItem(item.id)
    .pipe()
    .subscribe(() => {
      this.getcarts()
    })

  }

}
