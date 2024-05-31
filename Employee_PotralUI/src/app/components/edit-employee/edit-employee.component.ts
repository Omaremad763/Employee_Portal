import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';
import { response } from 'express';
import { FormsModule } from '@angular/forms';
import { Employees } from '../../models/Employees.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css',
})
export class EditEmployeeComponent implements OnInit {
  EmployeeDetails: Employees = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  };
  constructor(
    private route: ActivatedRoute,
    private Employeesrvice: EmployeesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.Employeesrvice.GetEmployee(id).subscribe({
            next: (response) => {
              this.EmployeeDetails = response;
            },
          });
        }
      },
    });
  }

  UpdateEmployee() {
    this.Employeesrvice.UpdateEmployee(
      this.EmployeeDetails.id,
      this.EmployeeDetails
    ).subscribe({
      next: (response) => {
        this.router.navigate(['Employees']);
      },
    });
  }

  deleteEmployee(id: string) {
    this.Employeesrvice.deleteEmployee(id).subscribe({
      next: (response) => {
        this.router.navigate(['Employees']);
      },
    });
  }
}
