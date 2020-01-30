import {Component, OnInit} from '@angular/core';
import {VolunteersService} from '../../services/volunteers/volunteers.service';

@Component({
  selector: 'app-volunteers-list',
  templateUrl: './volunteers-list.component.html',
  styleUrls: ['./volunteers-list.component.css']
})
export class VolunteersListComponent implements OnInit {

  public volunteers;
  listFilter = 'cart';

  constructor(private volunteersService: VolunteersService) {
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
}
