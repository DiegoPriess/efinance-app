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
  state: navbarState = navbarState.simulation;

  simulation: navbarState = navbarState.simulation;
  historic: navbarState = navbarState.historic;
  forum: navbarState = navbarState.forum;
  account: navbarState = navbarState.account;
  help: navbarState = navbarState.help;

  changeStage(newState: navbarState) {
    this.state = newState;
  }
}
