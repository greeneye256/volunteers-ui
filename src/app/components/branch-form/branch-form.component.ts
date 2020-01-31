import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-branch-form',
  templateUrl: './branch-form.component.html',
  styleUrls: ['./branch-form.component.css']
})
export class BranchFormComponent implements OnInit {

  branchForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.branchForm = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      abbreviation: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(2)]]
    });
  }

  saveBranch() {
  }

}
