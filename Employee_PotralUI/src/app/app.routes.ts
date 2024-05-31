import { Routes } from '@angular/router';
import { EmployeesListComponent } from './components/Employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
export const routes: Routes = [
  { path: 'Employees', component: EmployeesListComponent },

  { path: 'Employees/add', component: AddEmployeeComponent },

  { path: 'Employees/edit/:id', component: EditEmployeeComponent },
];
