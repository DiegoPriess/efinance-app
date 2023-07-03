import { CommonModule } from '@angular/common';
import {Component, inject, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { IParcel } from 'src/app/core/models/parcel';
import { SimulationService } from 'src/app/core/services/simulation.service';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
})
export class SimulatorComponent implements OnInit{
  private fb = inject(FormBuilder);
  private simulationService = inject(SimulationService);

  form!: FormGroup;
  simulationParcelList!: Partial<Array<IParcel>>;

  ngOnInit(): void {
    this.form = this.fb.group({
      amountFinanced: [null, Validators.required],
      amountOfTimes: [null, [Validators.required]],
      tax: [null, Validators.required],
      typeFinanced: [null, Validators.required]
    });
  }

  simulate(): void {
    this.simulationService
      .create(Number(this.form.get('amountFinanced')?.value),
              Number(this.form.get('amountOfTimes')?.value),
              this.form.get('tax')?.value,
              this.form.get('typeFinanced')?.value)
      .subscribe((simulation) => {
        this.listSimulateParcels(simulation.id);
      });
  }

  listSimulateParcels(simulationId?: string) {
    this.simulationService.listParcels(simulationId)
    .subscribe((parcelList) => {
      this.simulationParcelList = parcelList;
    });
  }
}
