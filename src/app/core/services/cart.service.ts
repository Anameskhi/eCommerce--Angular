import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CartService extends BaseService{
  
  cartCount = new BehaviorSubject(0)
  cartCount$ = this.cartCount.asObservable()

  getCarts(){
    return this.get('cart')
    .pipe(
      tap((carts: any)=>{
        this.cartCount.next(carts.length)
      })
    )
  }

  addToCart(payload:{
    productId: string,
    quantity: number
  }){
    return this.post('cart', payload)
    .pipe(
      tap(()=>{
        this.cartCount.next(this.cartCount.value + payload.quantity)
      })
    )
  }

  // get cart(): string | null {
  //   const cart = localStorage.getItem('cart')
  //   return cart ? JSON.parse(cart) : null
  // }

  // setCart(cart: string): void{
  //   localStorage.setItem('cart', JSON.stringify(cart))
  // }
}
