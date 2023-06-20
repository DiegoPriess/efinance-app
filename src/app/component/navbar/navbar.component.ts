import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { navbarState } from './interfaces/NavbarState';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class NavbarComponent{
  state: string = "simulation";

  changeStage(newState: string) {
    this.state = newState;
  }
}
