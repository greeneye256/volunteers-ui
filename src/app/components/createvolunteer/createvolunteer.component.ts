import { Component, OnInit } from '@angular/core';
import {VolunteersService} from '../../services/volunteers/volunteers.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {BranchService} from '../../services/branch/branch.service';

@Component({
  selector: 'app-createvolunteer',
  templateUrl: './createvolunteer.component.html',
  styleUrls: ['./createvolunteer.component.css']
})
export class CreatevolunteerComponent implements OnInit {

  public branches;
  volunteerForm: FormGroup;
  validMessage = '';
  public cuvant: string = 'ccc';

  constructor(private volunteersService: VolunteersService, private branchService: BranchService) {
    this.branches = branchService.getBranches()
      .subscribe(
      data => {
        this.branches = data
        ;
      },
      err => console.error(err),
      () => console.log('volunteers loaded')
    )
    ;
  }

  ngOnInit() {
    // @ts-ignore
    this.volunteerForm = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        phoneNumber: new FormControl('', Validators.required),
        birthDate: new FormControl('', Validators.required),
        branch: new FormControl('', Validators.required)
      }
    );
  }

  submitVolunteer() {
    if (this.volunteerForm.valid) {
      this.volunteersService.createVolunteer(this.volunteerForm.value).subscribe(
        data => {
          this.volunteerForm.reset();
          this.validMessage = 'Voluntarul a fost adaugat in baza de date!';
          return true;
        },
        error => {
          this.validMessage = JSON.stringify(this.volunteerForm.value);
          return Observable.throw(error);
        }
      );

    } else {
      this.validMessage = 'Completeaza toate campurile inainte de a adauga volutarul in baza de date!';
    }
  }

}
