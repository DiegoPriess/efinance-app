import { Component } from '@angular/core';
import { NavbarService } from 'src/app/core/services/navbar/navbar.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent {

  constructor(
    private navbarService: NavbarService
  ) { }

  isOptionSelected(option: 'sac' | 'price') {
    return this.navbarService.forumOption === option;
  }
}
