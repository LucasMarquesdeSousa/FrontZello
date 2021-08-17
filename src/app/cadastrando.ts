import { stringify } from "@angular/compiler/src/util";

export class Cadastrando {
    cpf: any;
    name: any;
    rg: any;
    data_nascimento: any;
    senha: any;
    confSenha: any;

    mensagens(a:any){
        var erroName:string = a['name'];
        var erroCPF: string = a['cpf'];
        var erroRG:string = a['rg'];
        var erroDt_nacimento: string = a['data_nacimento'];
        var erroSenha:string = a['senha'];
    }
}
