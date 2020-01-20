import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private http: HttpClient) { }

  getBranches() {
    return this.http.get('server/api/v1/branches');
  }

  getBranch(id: number) {
    return this.http.get('/server/api/v1/branches/' + id);
  }

  createBranch(branch) {
    const body = JSON.stringify(branch);
    return this.http.post('/server/api/v1/branches', body, httpOptions);
  }

}
