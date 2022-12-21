import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from '../features/main-layout/main-layout.component';
import { AuthPaccessDirective } from './directives/auth-paccess.directive';



@NgModule({
  declarations: [
  
    AuthPaccessDirective
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ]
})
export class SharedModule { }
