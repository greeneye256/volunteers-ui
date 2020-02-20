import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class VolunteersService {

  public volunteers;

  constructor(private http: HttpClient) {
  }

  getVolunteers() {
    return this.http.get('server/api/v1/volunteers');
  }

  createVolunteer(volunteer) {
    return this.http.post('server/api/v1/volunteers', volunteer, httpOptions);
  }

  getVolunteerById(id: string) {
    return this.http.get('server/api/v1/volunteers/' + id);
  }

  updateVolunteer(volunteer) {
    const id = volunteer.volunteerId;
    return this.http.put('server/api/v1/volunteers/' + id, volunteer);
  }

  deleteVolunteer(id: string) {
    return this.http.delete('server/api/v1/volunteers/' + id);
  }
}

