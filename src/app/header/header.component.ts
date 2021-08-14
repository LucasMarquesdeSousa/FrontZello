import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header: any;
  constructor( private DataService:DataService) { }

  ngOnInit(): void {
    this.getEmployesData();
  }
  getEmployesData(){
    this.DataService.getData().subscribe(res=>{
      this.header = res;
      console.log(res)
    });
  }
  resgister(){
    console.log('register')
  }
}
