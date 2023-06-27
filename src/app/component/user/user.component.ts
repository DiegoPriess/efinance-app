import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormLoginComponent } from './form-login/form-login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    CommonModule, 
    FormLoginComponent, 
    RegisterComponent, 
    RouterModule],
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  isLogin = true;

  toggleAuthentication() {
    this.isLogin = !this.isLogin;
  }
}
