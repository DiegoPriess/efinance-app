import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateComponent } from './page/authenticate/authenticate.component';
import { SimulatorComponent } from './component/simulator/simulator.component';
import { HistoricComponent } from './component/historic/historic.component';
import { PriceComponent } from './component/price/price.component';
import { SacComponent } from './component/sac/sac.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AuthenticateComponent,
  },
  {
    path: 'simulation',
    component: SimulatorComponent,
  },
  {
    path: 'historic',
    component: HistoricComponent,
  },
  {
    path: 'price',
    component: PriceComponent
  },
  {
    path: 'sac',
    component: SacComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
