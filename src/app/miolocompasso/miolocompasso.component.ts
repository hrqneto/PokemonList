import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Users} from '../shared/models/users';
import {Pokemons} from '../shared/models/pokemons';

@Component({
  selector: 'app-miolocompasso',
  templateUrl: './miolocompasso.component.html',
  styleUrls: ['./miolocompasso.component.css'],
  providers: [ApiService]
})
export class MiolocompassoComponent implements OnInit, OnDestroy {


  dadosAPI: Pokemons;
  error = '';
  currentPage: number = 0;
  constructor( private api: ApiService) {

  }

  ngOnInit() {
    this.api.getPokemons().subscribe(  (retorno : Pokemons)  => {
      this.dadosAPI = retorno;
    }, (error) => {
      this.dadosAPI = null;
      this.error = 'Erro na API';
    });
  }
  navegaEntrePaginas(url): void{
    console.log(url);

    this.currentPage = parseInt(new URL(url).searchParams.get("offset"));

    this.api.getNovosPokemons(url).subscribe(  (retorno : Pokemons)  => {
      this.dadosAPI = retorno;
    }, (error) => {
      this.dadosAPI = null;
      this.error = 'Erro na API';
    });
  }
  cadastraUser(): void{
    const ddUsu = {
      "name": "morpheus",
      "job": "leader",
    };
    this.api.postUsuario(ddUsu).subscribe(ret =>{
      console.log('salvo ok');
    })
  }
  ngOnDestroy(): void {
    this.dadosAPI = {
      results:[]
    } ;
  }

}
