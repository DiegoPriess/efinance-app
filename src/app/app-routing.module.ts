import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateComponent } from './page/authenticate/authenticate.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AuthenticateComponent,
  },
  // {
  //   path: '/home',
  //   component: HomeComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
