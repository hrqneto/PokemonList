import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {encode} from 'punycode';


@Component({
  selector: 'app-rowcompasso',
  templateUrl: './linhacompasso.component.html',
  styleUrls: ['./linhacompasso.component.css']
})
export class LinhacompassoComponent implements OnInit {

  @Input() name?: string;
  @Input() url?: string;  
  @Input() id?: any;
  constructor(private route: Router) {}

  ngOnInit() {
  }
  vaiParaFichaPokemon(id){
    console.log('id',id);
    id = id.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','');
    this.route.navigate(['/fichapokemon/' + id]);
  }
}
