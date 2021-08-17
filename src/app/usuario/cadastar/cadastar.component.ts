import { Component, OnInit } from '@angular/core';
import { Cadastrando } from 'src/app/cadastrando';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-cadastar',
  templateUrl: './cadastar.component.html',
  styleUrls: ['./cadastar.component.css']
})
export class CadastarComponent implements OnInit {

  retorno: any;
  cadastrar: any = new Cadastrando();


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getResult();
    this.retorno=[];
  }

  getResult() {
    this.dataService.getData().subscribe(res => {
      this.retorno = res;
    });
  }
  insertData() {
    this.dataService.insertData(this.cadastrar).subscribe(res => {
      this.retorno = res;
      return this.retorno;
    });
  }

}
