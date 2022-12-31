import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { MainLayoutComponent } from './features/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'main-products',
        loadChildren: () => import('./pages/main-products/main-products.module').then(m => m.MainProductsModule)
      },
      {
        path: 'cart',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule)
      },
      {
        path: 'orders',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/order/orders.module').then(m => m.OrdersModule)
      },
      {
        path: 'manager',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/manager/manager.module').then(m => m.ManagerModule)
      }
   

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
