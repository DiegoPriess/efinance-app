import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateComponent } from './page/authenticate/authenticate.component';
import { SimulatorComponent } from './component/simulator/simulator.component';
import { HistoricComponent } from './component/historic/historic.component';
import { ForumComponent } from './component/forum/forum.component';
import { AccountComponent } from './component/account/account.component';

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
    path: 'forum',
    component: ForumComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
