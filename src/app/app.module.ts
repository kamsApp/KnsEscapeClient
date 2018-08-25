import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatIconRegistry,
  MatListModule,
  MatButtonModule
} from '@angular/material';
import { StateComponent } from './state/state.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { path: '**', redirectTo:'/home' },
  { path: 'home', component: HomeComponent},
  { path: 'states', component: StateComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StateComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports:[ RouterModule ],
  providers: [HttpModule, MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
