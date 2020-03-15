import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MembersrvService} from '../../../services/member/membersrv.service';
import {BranchService} from '../../../services/branch/branch.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-feelist',
  templateUrl: './feelist.component.html',
  styleUrls: ['./feelist.component.css']
})
export class FeelistComponent implements OnInit {

  fees;
  private id;
  member: any;

  constructor(private memberService: MembersrvService,
              private router: Router,
              private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getFees();
    // Cum se face update - sa iei toate datele de pe un form
  }

  getFees() {
    this.memberService.getFeesFromMember(this.id)
      .subscribe(
        data => {
          this.fees = data;
        },
        err => console.error(err),
        () => {
        }
      )
    ;
  }

}
