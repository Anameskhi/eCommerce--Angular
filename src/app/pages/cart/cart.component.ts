import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/core/interfaces';
import { CartService, OrderService } from 'src/app/core/services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: Cart[] = []
  cartSum = 0

  constructor(
    private cartService:CartService,
    private orderService: OrderService
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
     console.log(this.cartItems)

  }

  removeItem(item: Cart){
    return this.cartService.deleteItem(item.id)
    .pipe()
    .subscribe(() => {
      this.getcarts()
    })

  }
  checkout(){
    this.orderService.createOrder()
    .pipe()
    .subscribe(res => {
      console.log(res)
      this.getcarts()
    })
  }

  minus(item: Cart){
    this.cartItems.forEach((eachItem)=>{
      if(eachItem.item.id === item.item.id)
      eachItem.quantity--
      if(item.quantity === 0){
        this.removeItem(item)
      }
    })
    
  }
  plus(item: Cart){
    this.cartItems.forEach((eachItem)=>{
      if(eachItem.item.id === item.item.id)
      eachItem.quantity++
    })
  }
}
