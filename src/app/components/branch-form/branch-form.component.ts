import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-branch-form',
  templateUrl: './branch-form.component.html',
  styleUrls: ['./branch-form.component.css']
})
export class BranchFormComponent implements OnInit {

  branchForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.branchForm = new FormGroup({
      name: new FormControl(),
      abbreviation: new FormControl()
    });
  }

  saveBranch() {
  }

}
