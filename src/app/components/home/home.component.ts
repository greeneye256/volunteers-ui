import { Component, OnInit } from '@angular/core';
import {BranchService} from '../../services/branch/branch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private branchService: BranchService) { }

  ngOnInit() {
  }

}