import { ViewJsonComponent } from './viewJson.component';
import { JsonService } from 'app/json.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewJsonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [JsonService,
    ViewJsonComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
