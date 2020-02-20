import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {VolunteersService} from '../../services/volunteers/volunteers.service';
import {IdDataTransferService} from '../../services/utils/id-data-transfer.service';

@Component({
  selector: 'app-volunteers-list',
  templateUrl: './volunteers-list.component.html',
  styleUrls: ['./volunteers-list.component.css']
})
export class VolunteersListComponent implements OnInit, OnChanges {

  public volunteers;
  public lastNameVisible = true;
  public firstNameVisible = true;
  public emailVisible = true;
  public phoneNumberVisible = true;
  public branchVisible = true;


  constructor(private volunteersService: VolunteersService, private idDataTransferService: IdDataTransferService) {
  }

  ngOnInit() {
    this.getVolunteers();
  }

  getVolunteers() {
    this.volunteersService.getVolunteers().subscribe(
      data => {
        this.volunteers = data;
      },
      err => console.error(err),
      () => console.log('volunteers loaded')
    );
  }

  sendId(id: string) {
    this.idDataTransferService.changeId(id);
  }

  deleteVolunteer(id: string) {
    // tslint:disable-next-line:max-line-length
    this.volunteersService.deleteVolunteer(id).subscribe(
      data => alert('Volunteer deleted'),
      error => console.log('something went wrong'),
      () => this.getVolunteers());
  }

  changeFirstNameView() {
    this.firstNameVisible = !this.firstNameVisible;
  }

  ngOnChanges(changes: SimpleChanges): void {

  }
}
