import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthAccessDirective } from './directives/auth-access.directive';



@NgModule({
  declarations: [
  
    AuthAccessDirective
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ],
  exports:[
    AuthAccessDirective
  ]
})
export class SharedModule { }
