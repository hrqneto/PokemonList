import { Component, OnInit } from '@angular/core';
import { MatToolbar} from '@angular/material';

@Component({
  selector: 'app-header-compasso',
  templateUrl: './header-compasso.component.html',
  styleUrls: ['./header-compasso.component.css'],

})
export class HeaderCompassoComponent implements OnInit {


  txtInicio = 'Home';
  constructor() {

  }

  ngOnInit() {
  }

}
