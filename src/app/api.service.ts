import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private consumoapi: HttpClient) {

  }
  getPokemons(): Observable<Object>{
    return this.consumoapi.get(environment.API_POKEMON + '/pokemon');
  }
  getPokemon(id: number): Observable<Object>{
    return this.consumoapi.get(environment.API_POKEMON + '/pokemon/' + id + '/');
  }
  postUsuario(dadosUser){
    return this.consumoapi.post(environment.API_POKEMON + '/pokemon', dadosUser);
  }
  getNovosPokemons(url){
    return this.consumoapi.get(url);

  }
}
