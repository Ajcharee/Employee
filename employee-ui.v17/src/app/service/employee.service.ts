import { Injectable, inject } from '@angular/core';
import { Employee } from '../model/employee';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService{
  http = inject(HttpClient);
  employees: Employee[] = [];
  getEmployees(employee: Employee):void {
    let httpParams = new HttpParams();
    if (employee.firstName) {
      httpParams = httpParams.append('firstName', employee.firstName);
    }
    if (employee.lastName) {
      httpParams = httpParams.append('lastName', employee.lastName);
    }
    if (employee.gender) {
      httpParams = httpParams.append('gender', employee.gender);
    }
    if (employee.department) {
      httpParams = httpParams.append('department', employee.department.code);
    }
    this.http.get<Employee[]>('/api/employee/search', { params: httpParams })
    .subscribe(response => {
      this.employees = response;
    });
  }
  clearEmployee():void{
  }
  constructor() { }
}
