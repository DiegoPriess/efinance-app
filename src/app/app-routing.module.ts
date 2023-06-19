import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateComponent } from './page/authenticate/authenticate.component';
import { HomeComponent } from './page/home/home.component';
import { HistoryComponent } from './component/history/history.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AuthenticateComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
