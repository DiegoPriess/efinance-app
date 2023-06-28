import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ISimulation } from 'src/app/core/models/simulation';
import { HistoricService } from 'src/app/core/services/historic/historic.service';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.scss'],
  imports: [
    CommonModule
  ],
  standalone: true
})
export class HistoricComponent {
  private historicService = inject(HistoricService);
  private router = inject(Router);

  historicList!: Partial<Array<ISimulation>>;

  ngOnInit(): void {
    this.historicService.listHistoric()
    .subscribe((historicList) => {
      this.historicList = historicList;
      console.log(historicList)
    });
  }

  showSimulation(simulationId: any) {
    this.router.navigateByUrl(`/simulation/view?simulationId=${simulationId}`);
  }
}
