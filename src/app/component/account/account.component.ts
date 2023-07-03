import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { IUsuario } from 'src/app/core/models/usuario';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  standalone: true,
})
export class AccountComponent {
  private userService = inject(UserService);
  private fb = inject(FormBuilder);

  accountForm!: FormGroup;

  user?: IUsuario;
  userName!: string;
  editMode: boolean = false;

  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => {
      this.user = user;

      this.accountForm = this.fb.group({
        name: [user.name],
        email: [user.email],
      });
    });
  }

  turnEditMode() {
    this.editMode = true;
  }

  updateUser() {
    this.userService
      .editUser(this.accountForm.get('name')?.value)
      .subscribe(() => {
        this.editMode = false;
      });
  }
}
