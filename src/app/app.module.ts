import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { Banner1Component } from './Components/banner1/banner1.component';
import { Banner2Component } from './Components/banner2/banner2.component';
import { AngularProjectsComponent } from './Pages/angular-projects/angular-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    Banner1Component,
    Banner2Component,
    AngularProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
