import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OprecWelcomeComponent } from './oprec/oprec-welcome/oprec-welcome.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'oprec',
    pathMatch: 'full'
  },
  {
    path: 'oprec',
    component: OprecWelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
