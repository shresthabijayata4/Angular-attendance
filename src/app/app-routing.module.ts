import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceSummaryComponent } from './attendance-summary/attendance-summary.component';
import { AuthGuard } from './guards/auth.guard';
import { HomePageComponent } from './home-page/home-page.component';
// import { AuthGuard } from "./core/guards/auth.guard";

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    title: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    title: 'Attendance System',
    component: HomePageComponent,
  },
  {
    path: 'register',
    pathMatch: 'full',
    title: 'register',

    component: RegisterComponent,
  },
  {
    path: 'summary',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    title: 'summary',

    component: AttendanceSummaryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
