import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FoundationLibraryModule} from 'foundation-library';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FoundationLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
