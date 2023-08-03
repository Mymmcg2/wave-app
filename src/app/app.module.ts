import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WaveProjectComponent } from './wave-project/wave-project.component';

@NgModule({
  declarations: [
    AppComponent,
    WaveProjectComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
