import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BranchService} from '../../../services/branch/branch.service';
import {VolunteersService} from '../../../services/volunteers/volunteers.service';
import {MembersrvService} from '../../../services/member/membersrv.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})

export class MemberEditComponent implements OnInit {

  branches;
  memberForm: FormGroup;
  validMessage = '';
  private id;
  memberToEdit: any;
  branchName: string;

  constructor(private memberService: MembersrvService,
              private branchService: BranchService,
              private router: Router,
              private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getBranches();
    // Cum se face update - sa iei toate datele de pe un form
    this.memberForm = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
        birthDate: new FormControl('', Validators.required),
        branch: new FormControl('', Validators.required)
      }
    );
  }


  getVolunteer() {
    this.memberService.getMemberById(this.id).subscribe(
      data => {
        this.memberToEdit = data;
        this.branchName = this.memberToEdit.branch.name;
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
    this.memberForm.patchValue({
      firstName: this.memberToEdit.lastName,
      lastName: this.memberToEdit.firstName,
      email: this.memberToEdit.email,
      phone: this.memberToEdit.phone,
      birthDate: this.memberToEdit.birthDate,
      branch: this.memberToEdit.branch
    });
  }

  updateVolunteer() {
    Object.assign(this.memberToEdit, this.memberForm.value);
    this.memberService.updateMember(this.memberToEdit).subscribe(
      data => {
        this.memberForm.reset();
        alert('Modificarea a fost facuta in baza de date!');
        this.router.navigate(['/memberslist']);
      },
      error => {
        this.validMessage = 'A aparut o eroare!';
        alert('A aparut o eroare');
      }
    );
  }
}
