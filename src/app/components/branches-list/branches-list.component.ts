import {Component, OnInit} from '@angular/core';
import {BranchService} from '../../services/branch/branch.service';

@Component({
  selector: 'app-branches-list',
  templateUrl: './branches-list.component.html',
  styleUrls: ['./branches-list.component.css']
})
export class BranchesListComponent implements OnInit {

  private branches;

  constructor(private branchService: BranchService) {
  }

  ngOnInit() {
    this.getBranches();
  }

  getBranches() {
    this.branchService.getBranches().subscribe(
      data => {
        this.branches = data;
      },
      error => console.error(error),
      () => console.log('branches loaded')
    );
  }

  deleteBranch(branchId: string) {
    this.branchService.deleteBranchById(branchId).subscribe(
      data => alert('Filiala a fost stearsa.'),
      error => console.log('something went wrong'),
      () => this.getBranches());
  }
}
