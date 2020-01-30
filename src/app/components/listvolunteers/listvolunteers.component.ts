import {Component, OnInit} from '@angular/core';
import {VolunteersService} from '../../services/volunteers/volunteers.service';
import {BranchService} from '../../services/branch/branch.service';

@Component({
  selector: 'app-listvolunteers',
  templateUrl: './listvolunteers.component.html',
  styleUrls: ['./listvolunteers.component.css']
})
export class ListvolunteersComponent implements OnInit {

  public volunteers;
  public branches;

  constructor(private volunteersService: VolunteersService, private branchService: BranchService) {
  }

  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  selectedItems: any = [];
  dropdownSettings: any = {};

  ngOnInit() {
    this.getVolunteers();
    this.getBranches();
  }

  getVolunteersByBranch(branch: string) {
    this.volunteersService.getVolunteersByBranch(branch).subscribe(
      data => {
        this.volunteers = data;
      },
      err => console.error(err),
      () => console.log('volunteers loaded')
    )
    ;
  }

  getBranches() {
    this.branchService.getBranches().subscribe(
      data => {
        this.branches = data;
      },
      err => console.error(err),
      () => console.log('branches loaded')
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
