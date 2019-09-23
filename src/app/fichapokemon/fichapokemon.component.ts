import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../api.service';
import {FichaPokemon} from '../shared/models/fichapokemon';

@Component({
  selector: 'app-fichapokemon',
  templateUrl: './fichapokemon.component.html',
  styleUrls: ['./fichapokemon.component.css']
})

export class FichapokemonComponent implements OnInit {
  idPokemon;
  conteudoPokemon: FichaPokemon;
  constructor(private route: ActivatedRoute, private api: ApiService) {
    this.route.params.subscribe(ret => {
      //console.log(ret);
      this.idPokemon = ret.id;
      this.api.getPokemon(this.idPokemon).subscribe((ret: FichaPokemon) => {
        this.conteudoPokemon = ret;
      });
    })

  }

  ngOnInit() {
  }

}
