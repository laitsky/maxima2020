import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NextStageComponent} from "./oprec/next-stage/next-stage.component";


const routes: Routes = [
  {
    path: '',
    component: NextStageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
