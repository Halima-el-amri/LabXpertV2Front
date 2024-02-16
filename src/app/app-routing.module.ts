import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {DashboardCounterComponent} from "./dashboard-counter/dashboard-counter.component";
import {ReagentsComponent} from "./reagents/reagents.component";
import {ListePatientsComponent} from "./liste-patients/liste-patients.component";
import { SamplesComponent } from './samples/samples.component';
import {AnalyseMesuresComponent} from "./analyse-mesures/analyse-mesures.component";
import {AnalyseComponent} from "./analyse/analyse.component";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

const routes: Routes = [

  { path: 'users', component: UsersComponent },
  { path: 'dashboard', component: DashboardCounterComponent },
  {path:"reagents",component:ReagentsComponent},
  { path: '', component: DashboardCounterComponent },
  {path:'patients',component:ListePatientsComponent},
  { path: 'samples', component: SamplesComponent },
  { path: 'analyseMesures', component: AnalyseMesuresComponent },
  { path: 'analyse', component: AnalyseComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
 // { path: 'user', component: BoardUserComponent },
 // { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
