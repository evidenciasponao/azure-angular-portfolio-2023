import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AngularProjectsComponent } from './Pages/angular-projects/angular-projects.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'angular-projects', component: AngularProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
