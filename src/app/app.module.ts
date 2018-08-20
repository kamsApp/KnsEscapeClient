import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatIconRegistry,MatListModule } from '@angular/material';
import { StateComponent } from './states/state/state.component';


@NgModule({
  declarations: [
    AppComponent,
    StateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
      MatIconModule
  ],
  providers: [HttpModule, MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
