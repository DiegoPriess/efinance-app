import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IParcel } from 'src/app/core/models/parcel';
import { ISimulation } from 'src/app/core/models/simulation';
import { HistoricService } from 'src/app/core/services/historic/historic.service';
import { SimulationService } from 'src/app/core/services/simulation/simulation.service';

@Component({
  selector: 'app-simulation-view',
  templateUrl: './simulation-view.component.html',
  styleUrls: ['./simulation-view.component.scss'],
  imports: [
    CommonModule
  ],
  standalone: true
})
export class SimulationViewComponent {
  private fb = inject(FormBuilder);
  private simulationService = inject(SimulationService);
  private historicService = inject(HistoricService);

  simulationId: string | null= new URLSearchParams(window.location.search).get("simulationId");
  form!: FormGroup;
  simulationParcelList!: Partial<Array<IParcel>>;
  historic!: ISimulation;
  
  constructor(public router: Router) {}

  ngOnInit(): void {
    let simulationId = this.simulationId ? this.simulationId : "";

    this.listSimulateParcels(simulationId);

    this.historicService.getHistoric(simulationId).subscribe((historic) => {
      let amountOfTimes = historic.amountOfTimes;
      this.form = this.fb.group({
        amountFinanced: [null],
        amountOfTimes: [amountOfTimes],
        tax: [null],
        typeFinanced: [historic.typeFinanced]
      });
    });
  }

  listSimulateParcels(simulationId?: string) {
    this.simulationService.listParcels(simulationId)
    .subscribe((parcelList) => {
      this.simulationParcelList = parcelList;
    });
  }
}
