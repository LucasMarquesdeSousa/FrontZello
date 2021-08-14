import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './usuario/login/login.component';
import { CadastarComponent } from './usuario/cadastar/cadastar.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cadastrar', component:CadastarComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
