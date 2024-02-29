import { Component, inject } from '@angular/core';
import { Department } from '../model/department';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { Gender } from '../type/gender';
import { GenderPipe } from '../pipe/gender.pipe';
import { TableModule } from 'primeng/table';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-employee-search',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    PanelModule,
    FormsModule,
    DropdownModule,
    RadioButtonModule,
    InputTextModule,
    GenderPipe,
    TableModule,
    ButtonModule
  ],
  templateUrl: './employee-search.component.html',
  styleUrl: './employee-search.component.scss'
})
export class EmployeeSearchComponent {
  employeeService = inject(EmployeeService);

  Gender = Gender;
  firstName?: string;
  lastName?: string;
  gender?: Gender;
  department?: string;
  departments: Department[] = [
    { "code": 1, "name": "Mavel" },
    { "code": 2, "name": "DC" }
  ];

  getEmployee() {
    const employee = {
      firstName: this.firstName,
      lastName: this.lastName,
      gender: this.gender,
      department: this.department
    } as Employee
    this.employeeService.getEmployees(employee);
  }
  clearEmployee() {
    this.employeeService.clearEmployee();
  }
}

