import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimulatorComponent } from './component/simulator/simulator.component';
import { HistoricComponent } from './component/historic/historic.component';
import { ForumComponent } from './component/forum/forum.component';
import { AccountComponent } from './component/account/account.component';
import { RegisterComponent } from "./component/user/register/register.component";
import { FormLoginComponent } from "./component/user/form-login/form-login.component";

const routes: Routes = [
  {
    path: 'login',
    pathMatch: "full",
    component: FormLoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
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
