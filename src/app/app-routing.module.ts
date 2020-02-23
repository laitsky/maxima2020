import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CongratulationsComponent} from "./oprec/congratulations/congratulations.component";

const routes: Routes = [
  {
    path: '',
    component: CongratulationsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
