import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employees } from '../../models/Employees.model';
import { EmployeesService } from '../../services/employees.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeRequest: Employees = {
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

  ngOnInit(): void {}

  addEmployee() {
    this.Employeesrvice.addEmployee(this.addEmployeeRequest).subscribe({
      next: (response) => {
        this.router.navigate(['Employees']);
      },
    });
  }
}
