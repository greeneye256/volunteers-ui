import { Component, OnInit } from '@angular/core';
import {VolunteersService} from '../../services/volunteers/volunteers.service';

@Component({
  selector: 'app-listvolunteers',
  templateUrl: './listvolunteers.component.html',
  styleUrls: ['./listvolunteers.component.css']
})
export class ListvolunteersComponent implements OnInit {

  public volunteers;

  constructor(private volunteersService: VolunteersService) { }

  ngOnInit() {
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
