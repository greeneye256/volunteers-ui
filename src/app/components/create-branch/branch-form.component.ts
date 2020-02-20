import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {BranchService} from '../../services/branch/branch.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-branch-form',
  templateUrl: './branch-form.component.html',
  styleUrls: ['./branch-form.component.css']
})
export class BranchFormComponent implements OnInit {

  branchForm: FormGroup;

  constructor(private fb: FormBuilder, private branchService: BranchService, private router: Router) {
  }

  ngOnInit() {
    this.branchForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      abbreviation: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]]
    });
  }

  saveBranch() {
    this.branchService.createBranch(this.branchForm.value).subscribe(
      data => {
        alert('Filiala a fost creata si adaugata la baza de date!');
        this.router.navigate(['/brancheslist']);
        return true;
      },
      error => {
        console.log('A aparut o eroare!');
        alert('A aparut o eroare');
      }
    );
  }
}
