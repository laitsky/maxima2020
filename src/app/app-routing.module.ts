import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OprecWelcomeComponent } from './oprec/oprec-welcome/oprec-welcome.component';
import { FormOprecComponent } from './oprec/form-oprec/form-oprec.component';
import { EsaiSingkatComponent } from './oprec/esai-singkat/esai-singkat.component';
import { PenilaianKepribadianComponent } from './oprec/penilaian-kepribadian/penilaian-kepribadian.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'oprec',
    pathMatch: 'full'
  },
  {
    path: 'oprec',
    component: OprecWelcomeComponent
  },
  {
    path: 'oprec/form-oprec',
    component: FormOprecComponent
  },
  {
    path: 'oprec/esai-singkat',
    component: EsaiSingkatComponent
  },
  {
    path: 'oprec/penilaian-kepribadian',
    component: PenilaianKepribadianComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
