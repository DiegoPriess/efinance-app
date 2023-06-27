import { Component } from '@angular/core';
import { NavbarService } from 'src/app/core/services/navbar/navbar.service';

@Component({
  selector: 'app-sac',
  templateUrl: './sac.component.html',
  styleUrls: ['./sac.component.scss']
})
export class SacComponent {

  constructor(
    private navbarService: NavbarService
  ) { }

  isOptionSelected(option: 'sac' | 'price') {
    return this.navbarService.forumOption === option;
  }
}
