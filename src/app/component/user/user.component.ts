import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormLoginComponent } from './form-login/form-login.component';
import { RegisterComponent } from './register/register.component';

const IMPORTS = [CommonModule, FormLoginComponent, RegisterComponent];

@Component({
  standalone: true,
  imports: [IMPORTS],
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
    `
      .user {
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
          font-weight: bold;
          font-size: 1em;
          color: #565656;
          margin-top: 15px;
          cursor: pointer;
          line-height: 0.5;
        }
      }
    `,
  ],
})
export class UserComponent {
  isLogin = true;

  toggleAuthentication() {
    this.isLogin = !this.isLogin;
  }
}
