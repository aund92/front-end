import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {EmployeeModel} from '../../../models/employee-model';
import {EmployeeService} from '../../../service/employee.service';
import {Router} from '@angular/router';
import {error} from 'util';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<EmployeeModel[]>;

  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {

    this.employees = this.employeeService.getEmployeeList();
  }

  deleteEmployee(id: number) {
    this.employeeService.delteEmployee(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  employeeDetails(id: number) {
    this.router.navigate(['employee/details', id]);
  }

  updateEmployee(id: number) {
    this.router.navigate(['employee/update', id]);
  }
}
