import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-goodhome',
  templateUrl: './goodhome.component.html',
  styleUrls: ['./goodhome.component.css']
})
export class GoodhomeComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
