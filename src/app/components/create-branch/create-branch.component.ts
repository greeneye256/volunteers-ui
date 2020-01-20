import {Component, OnInit} from '@angular/core';
import {BranchService} from '../../services/branch/branch.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  // selector: 'app-create-branch',
  templateUrl: './create-branch.component.html',
  styleUrls: ['./create-branch.component.css']
})
export class CreateBranchComponent implements OnInit {

  branchForm: FormGroup;
  validMessage = '';

  constructor(private branchService: BranchService) {
  }

  ngOnInit() {
    this.branchForm = new FormGroup({
        name: new FormControl('', Validators.required),
        abbreviation: new FormControl('', Validators.required)
      }
    );
  }

  submitBranch() {
    if (this.branchForm.valid) {
      this.branchService.createBranch(this.branchForm.value).subscribe(
        data => {
          this.branchForm.reset();
          this.validMessage = 'Filiala a fost creata!';
          return true;
        },
        error => {
          this.validMessage = 'A aparut o eroare';
          return Observable.throw(error);
        }
      );

    } else {
      this.validMessage = 'Completeaza campul nume inainte de a crea filiala';
    }
  }

}
