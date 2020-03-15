import {Component, OnInit} from '@angular/core';
import {MembersrvService} from '../../../services/member/membersrv.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BranchService} from '../../../services/branch/branch.service';
import Instance = WebAssembly.Instance;

@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.css']
})
export class MemberCreateComponent implements OnInit {
  branches: any = [];
  memberForm: FormGroup;
  religions = [
    {name: 'Catolica', val: 'CATOLICA'},
    {name: 'Greco-Catolica', val: 'GRECO_CATOLICA'},
    {name: 'Ortodoxa', val: 'ORTODOXA'},
    {name: 'Reformata', val: 'REFORMATA'},
    {name: 'Luterana', val: 'LUTERANA'},
    {name: 'Protestanta', val: 'PROTESTANTA'},
    {name: 'Baptista', val: 'BAPTISTA'},
    {name: 'Iudaica', val: 'IUDAICA'},
    {name: 'Budista', val: 'BUDISTA'},
    {name: 'Islamica', val: 'ISLAMICA'},
    {name: 'Hindusa', val: 'HINDUSA'},
    {name: 'Taoista', val: 'TAOISTA'},
    {name: 'Confucianista', val: 'CONFUCIANISTA'},
    {name: 'Alta', val: 'ALTA'}
  ];

  education = [
    {name: '8 clase', val: 'OPT_CLASE'},
    {name: 'Scoala profesionala', val: 'SCOALA_PROFESIONALA'},
    {name: '12 clase', val: 'DOUASPREZECE_CLASE'},
    {name: 'Bacalaureat', val: 'BACALAUREAT'},
    {name: 'Post liceal', val: 'POST_LICEAL'},
    {name: 'Colegiu universitar', val: 'COLEGIU_UNIVERSITAR'},
    {name: 'Facultate fara licenta', val: 'FACULTATE_FARA_LICENTA'},
    {name: 'Facultate cu licenta', val: 'FACULTATE_CU_LICENTA'},
    {name: 'Masterat', val: 'MASTER'},
    {name: 'Doctorat', val: 'DOCTORAT'},
    {name: 'Alta (introduceti in campul de detalii)', val: 'ALTA'},
  ];

  memberType = [
    {name: 'Membru-Voluntar', val: 'MEMBER_VOLUNTEER'},
    {name: 'Membru', val: 'MEMBER'},
    {name: 'Voluntar', val: 'VOLUNTEER'}
  ];

  constructor(private branchService: BranchService, private fb: FormBuilder,
              private membersrvService: MembersrvService, private router: Router) {
  }

  ngOnInit() {
    this.getBranches();
    this.memberForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      membershipDetails: this.fb.group({
        dateOfRegistrationInSAMR: new FormControl('', Validators.required),
        dateOfRegistrationInDatabase: new FormControl(new Date(Date.now())),
        dueAmount: new FormControl('0')
      }),
      birthDate: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      religion: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      educationType: new FormControl('', Validators.required),
      educationInfo: new FormControl('', Validators.required),
      personalNumericCode: new FormControl('', Validators.required),
      identityCardNumber: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      zipCode: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      county: new FormControl('', Validators.required),
      branch: new FormControl('', Validators.required),
      typeOfStatus: new FormControl('', Validators.required),
      isCoordinator: new FormControl('', Validators.required),
      otherInfo: new FormControl(''),
    });
  }


  saveMember() {
    if (this.memberForm.valid) {
      this.membersrvService.createMember(this.memberForm.value).subscribe(
        data => {
          alert('Membrul a fost adaugat in baza de date!');
          this.router.navigate(['/memberslist']);
        },
        error => {
          alert('A aparut o eroare');
        }
      );

    }
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
}
