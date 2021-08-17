import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/login';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  initLogin:any = new Login();
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  login() {
    this.dataService.loginData(this.initLogin).subscribe(res => {
      console.log(res);
    });
  }

}
