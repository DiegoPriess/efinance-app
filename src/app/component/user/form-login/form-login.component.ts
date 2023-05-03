import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginService } from '../../../core/services/login/login-post.service';

const IMPORTS = [
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
];

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
  standalone: true,
  imports: [IMPORTS],
})
export class FormLoginComponent implements OnInit {
  private fb = inject(FormBuilder);
  private loginService = inject(LoginService);

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  login() {
    this.loginService
      .login(this.form.get('email')?.value, this.form.get('password')?.value)
      .subscribe((user) => {
        console.log(this.form.value);
        console.log(user);
      });
  }
}
