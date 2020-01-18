import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OprecWelcomeComponent } from './oprec/oprec-welcome/oprec-welcome.component';
import { PenilaianKepribadianComponent } from './oprec/penilaian-kepribadian/penilaian-kepribadian.component';
import { SaranDivisiComponent } from './oprec/saran-divisi/saran-divisi.component';
import { FormOprecComponent } from './oprec/form-oprec/form-oprec.component';
import { EsaiSingkatComponent } from './oprec/esai-singkat/esai-singkat.component';
import { FinalisasiDataComponent } from './oprec/finalisasi-data/finalisasi-data.component';
import { OprecTokenComponent } from './oprec/oprec-token/oprec-token.component';

@NgModule({
  declarations: [
    AppComponent,
    OprecWelcomeComponent,
    PenilaianKepribadianComponent,
    SaranDivisiComponent,
    FormOprecComponent,
    EsaiSingkatComponent,
    FinalisasiDataComponent,
    OprecTokenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
