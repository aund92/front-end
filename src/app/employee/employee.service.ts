import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/employees';

  constructor(private httpClient: HttpClient) {
  }

  getEmployee(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee: object): Observable<object> {
    return this.httpClient.post(`${this.baseUrl}`, employee);
  }

  updateEmployee(id: number, employee: any): Observable<object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, employee);
  }

  delteEmployee(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getEmployeeList(): Observable<any> {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('token')});
    return this.httpClient.get(`${this.baseUrl}`, {headers});
  }
}
