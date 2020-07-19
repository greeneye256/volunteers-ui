import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MembersrvService {

  constructor(private http: HttpClient) {
  }

  getAllMembers() {
    return this.http.get('server/api/v1/members');
  }

  getMemberById(id) {
    return this.http.get('server/api/v1/members/' + id);
  }

  deleteMemberById(id) {
    return this.http.delete('server/api/v1/members/' + id);
  }

  createMember(member) {
    return this.http.post('server/api/v1/members', member, httpOptions);
  }

  updateMember(member) {
    const id = member.id;
    alert('ati intrat in service member cu id de membru' + id);
    return this.http.put('server/api/v1/members/' + id, member, httpOptions);
  }

  getFeesFromMember(id) {
    return this.http.get('server/api/v1/members/fees/' + id);
  }
}
