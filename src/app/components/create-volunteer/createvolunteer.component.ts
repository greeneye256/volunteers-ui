import {Component, OnInit} from '@angular/core';
import {VolunteersService} from '../../services/volunteers/volunteers.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {BranchService} from '../../services/branch/branch.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createvolunteer',
  templateUrl: './createvolunteer.component.html',
  styleUrls: ['./createvolunteer.component.css']
})
export class CreatevolunteerComponent implements OnInit {
  volunteerForm: FormGroup;
  validMessage = '';
  branches: any = [];

  constructor(private volunteersService: VolunteersService, private branchService: BranchService, private router: Router) {}

  ngOnInit() {
    this.getBranches();
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

  getBranches() {
    this.branchService.getBranches()
      .subscribe(
        data => {
          this.branches = data;
        },
        err => console.error(err),
        () => console.log('branches loaded')
      )
    ;
  }

  submitVolunteer() {
    if (this.volunteerForm.valid) {
      this.volunteersService.createVolunteer(this.volunteerForm.value).subscribe(
        data => {
          this.volunteerForm.reset();
          alert('Voluntarul a fost adaugat in baza de date!');
          this.router.navigate(['/volunteerslist']);
        },
        error => {
          this.validMessage = 'A aparut o eroare!';
          alert('A aparut o eroare');
        }
      );

    } else {
      this.validMessage = 'Completeaza toate campurile inainte de a adauga volutarul in baza de date!';
    }
  }

}
