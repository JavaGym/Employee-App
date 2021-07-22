import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@Injectable({
  providedIn:'root'
})

export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employee";

  constructor(private httpClient : HttpClient) { }

  getEmployeeList(): Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }
  
  createEmployee(employee : Employee) : Observable<Object>{

      return this.httpClient.post(`${this.baseURL}`,employee);

  }
}
