import { Component, OnInit } from '@angular/core';
import { Employees } from '../../../models/Employees.model';
import { NgFor, NgIf } from '@angular/common';
import { EmployeesService } from '../../../services/employees.service';
import { RouterLink } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css',
})
export class EmployeesListComponent implements OnInit {
  Employees: Employees[] = [];

  constructor(private employeesservice: EmployeesService) {}

  ngOnInit(): void {
    this.employeesservice.GetAllEmployess().subscribe({
      next: (Employees) => {
        this.Employees = Employees;
      },

      error: (response) => {
        console.log(response);
      },
    });
  }
}
