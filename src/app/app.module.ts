import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import  { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms'; 

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CadastarComponent } from './usuario/cadastar/cadastar.component';
import { LoginComponent } from './usuario/login/login.component';
import { FormsModule } from '@angular/forms';
const appRoutes: Routes = [
  { path: '', component: HeaderComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CadastarComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
