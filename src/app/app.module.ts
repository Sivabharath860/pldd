import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './componenets/mainpage/mainpage.component';
import { DiseaseComponent } from './componenets/disease/disease.component';
import { HispaComponent } from './componenets/hispa/hispa.component';
import { BrownspotComponent } from './componenets/brownspot/brownspot.component';
import { LeafblastComponent } from './componenets/leafblast/leafblast.component';
//import { DiseaseComponent } from './components/disease/disease.component';


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    DiseaseComponent,
    HispaComponent,
    BrownspotComponent,
    LeafblastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
