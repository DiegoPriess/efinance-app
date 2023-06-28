import { Component } from '@angular/core';
import { IHistoric } from 'src/app/core/models/historic';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.scss'],
  standalone: true
})
export class HistoricComponent {
  historicList!: Array<IHistoric>
  ngOnInit(): void {
     
  }
}
