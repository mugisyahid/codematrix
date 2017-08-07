import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule }    from '@angular/http';


import { AppService } from './application.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
    providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
