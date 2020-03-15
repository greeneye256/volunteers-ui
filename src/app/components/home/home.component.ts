import { Component, OnInit } from '@angular/core';
import {BranchService} from '../../services/branch/branch.service';
import {ApplicationUser} from '../../model/applicationUser';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }

}
