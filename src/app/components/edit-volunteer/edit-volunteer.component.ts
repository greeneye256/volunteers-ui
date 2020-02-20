import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {VolunteersService} from '../../services/volunteers/volunteers.service';
import {BranchService} from '../../services/branch/branch.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-volunteer',
  templateUrl: './edit-volunteer.component.html',
  styleUrls: ['./edit-volunteer.component.css']
})

export class EditVolunteerComponent implements OnInit {

  public branches;
  volunteerForm: FormGroup;
  validMessage = '';
  private id;
  volunteerToEdit: any;
  branchName: string;

  constructor(private volunteersService: VolunteersService,
              private branchService: BranchService,
              private router: Router,
              private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getBranches();
    // Cum se face update - sa iei toate datele de pe un form
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


  getVolunteer() {
    this.volunteersService.getVolunteerById(this.id).subscribe(
      data => {
        this.volunteerToEdit = data;
        this.branchName = this.volunteerToEdit.branch.name;
        this.setDefaultValues();
        },
      err => console.error(err),
      () => {
        console.log('volunteer loaded');
      }
    );
  }

  getBranches() {
    this.branchService.getBranches()
      .subscribe(
        data => {
          this.branches = data;
          this.getVolunteer();
        },
        err => console.error(err),
        () => {
        }
      )
    ;
  }

  setDefaultValues() {
    this.volunteerForm.patchValue({
      firstName: this.volunteerToEdit.lastName,
      lastName: this.volunteerToEdit.firstName,
      email: this.volunteerToEdit.email,
      phoneNumber: this.volunteerToEdit.phoneNumber,
      birthDate: this.volunteerToEdit.birthDate,
      branch: this.volunteerToEdit.branch
    });
  }

  updateVolunteer() {
    Object.assign(this.volunteerToEdit, this.volunteerForm.value);
    this.volunteersService.updateVolunteer(this.volunteerToEdit).subscribe(
      data => {
        this.volunteerForm.reset();
        alert('Modificarea a fost facuta in baza de date!');
        this.router.navigate(['/volunteerslist']);
      },
      error => {
        this.validMessage = 'A aparut o eroare!';
        alert('A aparut o eroare');
      }
    );
  }
}
