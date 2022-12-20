import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutModule } from './features/main-layout/main-layout.module';
import { LoginComponent } from './pages/auth/components/login/login.component';
import { RegisterComponent } from './pages/auth/components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MainLayoutModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
