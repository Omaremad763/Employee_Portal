import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../Environments/environment.development';
import { Employees } from '../models/Employees.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) {}

  GetAllEmployess(): Observable<Employees[]> {
    return this.http.get<Employees[]>(this.baseApiUrl + '/api/Employee');
  }

  addEmployee(addEmloyeeRequest: Employees): Observable<Employees[]> {
    addEmloyeeRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Employees[]>(
      this.baseApiUrl + '/api/Employee',
      addEmloyeeRequest
    );
  }
  GetEmployee(id: string): Observable<Employees> {
    return this.http.get<Employees>(this.baseApiUrl + '/api/Employee/' + id);
  }

  UpdateEmployee(
    id: string,
    UpdateEmployeeRequest: Employees
  ): Observable<Employees> {
    return this.http.put<Employees>(
      this.baseApiUrl + '/api/Employee/' + id,
      UpdateEmployeeRequest
    );
  }

  deleteEmployee(id: string): Observable<Employees> {
    return this.http.delete<Employees>(this.baseApiUrl + '/api/Employee/' + id);
  }
}
