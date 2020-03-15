import {Component, OnInit} from '@angular/core';
import {MembersrvService} from '../../../services/member/membersrv.service';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {

  members;

  constructor(private membersrvService: MembersrvService) {
  }

  ngOnInit() {
    console.log('you are in memberlist component');
    this.getMembers();
  }

  getMembers() {
    console.log(this.members);
    this.membersrvService.getAllMembers().subscribe(data => {
      this.members = data;
      console.log(data);
      console.log(this.members);
    }, error => console.log(error));
  }

  deleteMember(memberId) {
    this.membersrvService.deleteMemberById(memberId).subscribe(data => this.getMembers());
  }
}


