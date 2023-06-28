import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { IUsuario } from 'src/app/core/models/usuario';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  imports: [
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  standalone: true
})
export class AccountComponent {
  private userService = inject(UserService);

  user?: IUsuario;

  ngOnInit(): void {
    this.userService.getUser()
    .subscribe((user) => {
      this.user = user;
    });
  }
}
