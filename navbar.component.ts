import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { navbarState } from './interfaces/NavbarState';
import { NavbarService } from 'src/app/core/services/navbar/navbar.service';

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

  constructor(
    private navbarService: NavbarService
  ) { }

  state: navbarState = navbarState.simulation;
  showForumOptions = false;

  simulation: navbarState = navbarState.simulation;
  historic: navbarState = navbarState.historic;
  forum: navbarState = navbarState.forum;
  account: navbarState = navbarState.account;
  help: navbarState = navbarState.help;

  changeStage(newState: navbarState) {
    if (newState === navbarState.forum) {
      this.showForumOptions = !this.showForumOptions;
    } else {
      this.showForumOptions = false;
    }

    if (newState === navbarState.sac) {
      this.navbarService.forumOption = 'sac';
    } else {
      this.navbarService.forumOption = 'price';
    }

    this.state = newState;
  }
}
