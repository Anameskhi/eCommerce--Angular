import { Component, OnInit } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { Order } from 'src/app/core/interfaces/order';
import { OrderService } from 'src/app/core/services';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  // orders$: Observable<Order[]> = this.orderService.getOrders()
  orders: Order[] = []
  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.getOrders()
  }

  getOrders(){
    this.orderService.getOrders()
    .pipe()
    .subscribe(res =>{
      this.orders = res
      

    })
  }
 
}
