import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardCounterComponent } from './dashboard-counter/dashboard-counter.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ModalComponent } from './modal/modal.component';
import { ReagentsComponent } from './reagents/reagents.component';
import { CommonModule } from '@angular/common';
import {PatientService} from "./liste-patients/patient.service";
import {ListePatientsComponent} from "./liste-patients/liste-patients.component";
import { SamplesComponent } from './samples/samples.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { AnalyseMesuresComponent } from './analyse-mesures/analyse-mesures.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { httpInterceptorProviders } from './_helpers/http-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavBarComponent,
    SidebarComponent,
    DashboardCounterComponent,
    ModalComponent,
    ReagentsComponent,
    ListePatientsComponent,
    SamplesComponent,
    AnalyseComponent,
    AnalyseMesuresComponent,
    LoginComponent,
    LayoutComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    BoardAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule

  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
