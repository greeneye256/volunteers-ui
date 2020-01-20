import {Component, OnInit} from '@angular/core';
import {BranchService} from '../../services/branch/branch.service';
import {VolunteersService} from '../../services/volunteers/volunteers.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public branches;
  public volunteers;

  constructor(private branchService: BranchService, private volunteersService: VolunteersService) {
  }

  ngOnInit() {
    this.getBranches();
    this.getVolunteers();
  }

  getBranches() {
    this.branchService.getBranches().subscribe(
      data => {
        this.branches = data;
      },
      err => console.error(err),
      () => console.log('braches loaded')
    );
  }

  getVolunteers() {
    this.volunteersService.getVolunteers().subscribe(
      data => {
        this.volunteers = data;
      },
      err => console.error(err),
      () => console.log('volunteers loaded')
    );
  }

}
