import { Component } from '@angular/core';
import { NavbarComponent } from 'src/app/component/navbar/navbar.component';
import { SimulatorComponent } from 'src/app/component/simulator/simulator.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    NavbarComponent,
    SimulatorComponent
  ]

})
export class HomeComponent {
}
