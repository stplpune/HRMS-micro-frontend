import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'employee-register', pathMatch: 'full' },
  { path: 'employee-register', loadComponent: () => import('../app/employee-register/employee-register.component').then(c => c.EmployeeRegisterComponent) },
  { path: 'holiday-register', loadComponent: () => import('../app/holiday-register/holiday-register.component').then(c => c.HolidayRegisterComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
