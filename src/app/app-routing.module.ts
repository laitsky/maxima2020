import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OprecWelcomeComponent } from './oprec/oprec-welcome/oprec-welcome.component';
import { FormOprecComponent } from './oprec/form-oprec/form-oprec.component';
import { EsaiSingkatComponent } from './oprec/esai-singkat/esai-singkat.component';
import { PenilaianKepribadianComponent } from './oprec/penilaian-kepribadian/penilaian-kepribadian.component';
import { FinalisasiDataComponent } from './oprec/finalisasi-data/finalisasi-data.component';
import { OprecTokenComponent } from './oprec/oprec-token/oprec-token.component';
import {SaranDivisiComponent} from './oprec/saran-divisi/saran-divisi.component';
import {NextStageComponent} from "./oprec/next-stage/next-stage.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'oprec/next-stage',
    pathMatch: 'full'
  },
  {
    path: 'oprec',
    component: OprecWelcomeComponent
  },
  {
    path: 'oprec/penilaian-kepribadian',
    component: PenilaianKepribadianComponent
  },
  {
    path: 'oprec/saran-divisi',
    component: SaranDivisiComponent
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
    path: 'oprec/finalisasi-data',
    component: FinalisasiDataComponent
  },
  {
    path: 'oprec/oprec-token',
    component: OprecTokenComponent
  },
  {
    path: 'oprec/next-stage',
    component: NextStageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
