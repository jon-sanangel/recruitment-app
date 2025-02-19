import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ChildAppRoutingModule } from './child-app-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    ChildAppRoutingModule
  ]
})
export class ChildAppModule { }
