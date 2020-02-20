import {Component, OnInit} from '@angular/core';
import {BranchService} from '../../services/branch/branch.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.component.html',
  styleUrls: ['./edit-branch.component.css']
})
export class EditBranchComponent implements OnInit {

  private branchToEdit: any;

  constructor(private branchService: BranchService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  branchForm: FormGroup;

  ngOnInit() {

    this.getBranch();
    console.log(this.branchToEdit);
    this.branchForm = new FormGroup({
      branchId: new FormControl(''),
      name: new FormControl('', Validators.required),
      abbreviation: new FormControl('', Validators.required)
    });
  }

  getBranch() {
    this.branchToEdit = this.branchService.getBranch(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(
      data => {
        this.branchToEdit = data;
        this.setFormValues();
      },
      err => console.error(err),
      () => {
      }
    );
  }

  setFormValues() {
    this.branchForm.patchValue({
      name: this.branchToEdit.name,
      abbreviation: this.branchToEdit.abbreviation,
      branchId: this.branchToEdit.branchId
    });
  }

  updateBranch() {
    this.branchService.updateBranch(this.branchForm.value).subscribe(
      data => {
        this.branchForm.reset();
        alert('Filiala a fost modificata!');
        this.router.navigate(['/brancheslist']);
      },
      error => {
        console.log('something went wrong!');
      },
      () => {
      }
    );
  }
}
