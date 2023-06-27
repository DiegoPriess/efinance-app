import { Component, inject } from '@angular/core';
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
import { SimulationService } from 'src/app/core/services/simulation/simulation-post.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss'],
  standalone: true,
  imports: [ 
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
})
export class SimulatorComponent {
  private fb = inject(FormBuilder);
  form!: FormGroup;
  simulationResult!: Array<IParcel>;
  private simulationService = inject(SimulationService);

  ngOnInit(): void {
    this.form = this.fb.group({
      amountFinanced: [null, Validators.required],
      amountOfTimes: [null, [Validators.required]],
      tax: [null, Validators.required],
      typeFinanced: [null, Validators.required]
    });
  }

  simulate(): void {
    console.log(
      this.form.get('amountFinanced')?.value,
      this.form.get('amountOfTimes')?.value,
      this.form.get('tax')?.value,
      this.form.get('typeFinanced')?.value
    )
    this.simulationService
      .create(parseFloat(this.form.get('amountFinanced')?.value),
              parseFloat(this.form.get('amountOfTimes')?.value),
              parseFloat(this.form.get('tax')?.value),
              this.form.get('typeFinanced')?.value)
      .subscribe(() => {
        alert("Cadastrado")
        //this.router.navigateByUrl("/simulation");
      });
  }
}
