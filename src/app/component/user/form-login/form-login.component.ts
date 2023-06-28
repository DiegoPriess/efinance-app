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
import { LoginService } from '../../../core/services/login/login.service';
import {Router, RouterLink} from '@angular/router';

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
  imports: [IMPORTS, RouterLink],
})
export class FormLoginComponent implements OnInit {
  private fb = inject(FormBuilder);
  private loginService = inject(LoginService);
  private router = inject(Router);

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });

    this.validations();
  }

  validations() {
    if(localStorage.getItem("userId")) {
      this.router.navigateByUrl("/simulation");
    }
  }

  login() {
    this.loginService
      .login(this.form.get('email')?.value, this.form.get('password')?.value)
      .subscribe((response) => {
        localStorage.setItem("userId", response.userId ? response.userId : "");
        this.router.navigateByUrl("/simulation");
      });
  }
}
