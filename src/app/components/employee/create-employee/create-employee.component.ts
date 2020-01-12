import {Component, OnInit} from '@angular/core';
import {EmployeeModel} from '../../../models/employee-model';
import {EmployeeService} from '../../../service/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: EmployeeModel = new EmployeeModel();
  submitted = false;

  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new EmployeeModel();
  }

  save() {
    this.employeeService.createEmployee(this.employee).subscribe(data => console.log(data), error => console.log(error));
    this.employee = new EmployeeModel();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/employee/list']);
  }


}
