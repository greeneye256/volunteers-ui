import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MembersrvService} from '../../../services/member/membersrv.service';
import {MembershipFeeService} from '../../../services/membershipFee/membership-fee.service';

@Component({
  selector: 'app-addfee',
  templateUrl: './addfee.component.html',
  styleUrls: ['./addfee.component.css']
})
export class AddfeeComponent implements OnInit {

  memberId: string;
  member;
  membershipDetailsId;
  membershipDetails = {id: 4};
  feeForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private membersrvService: MembersrvService,
    private membershipFeeService: MembershipFeeService,
    private router: Router,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.memberId = this.activatedRoute.snapshot.paramMap.get('id');
    this.membersrvService.getMembershipDetailsId(this.memberId).subscribe(data => {
      this.membershipDetailsId = data;
      this.feeForm = this.fb.group({
        date: new FormControl('', Validators.required),
        fee: new FormControl('', Validators.required),
        membershipDetails: this.fb.group({id: new FormControl(this.membershipDetailsId)})
      });
    });
  }

  saveMembershipFee() {
    this.membershipFeeService.addMembershipFee(this.feeForm.value).subscribe(
      data => {
        alert('Plata a fost creata si adaugata in baza de date!');
        this.router.navigate(['/memberslist']);
        return true;
      },
      error => {
        console.log('A aparut o eroare!');
        alert('A aparut o eroare');
      }
    );
  }

}
