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
import { RegisterService } from '../../../core/services/register/register-post.service';

const IMPORTS = [
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
];

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [IMPORTS],
})
export class RegisterComponent implements OnInit {
  private fb = inject(FormBuilder);
  private registerService = inject(RegisterService);

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  register() {
    this.registerService
      .login(
        this.form.get('name')?.value,
        this.form.get('email')?.value,
        this.form.get('password')?.value
      )
      .subscribe((user) => {
        console.log(user);
      });
  }
}
