import { ViewJsonComponent } from './viewJson.component';
import { JsonService } from 'app/json.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { AppConfig } from "app/app.config";




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
    ViewJsonComponent,
    AppConfig,
    { provide: APP_INITIALIZER, useFactory: (config: AppConfig) => () => config.load(), deps: [AppConfig], multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
