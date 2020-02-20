import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  public branches;

  constructor(private http: HttpClient) {
  }

  getBranches() {
    return this.http.get('server/api/v1/branches');
  }

  getBranch(id: string) {
    return this.http.get('/server/api/v1/branches/' + id);
  }

  createBranch(branch) {
    const body = JSON.stringify(branch);
    return this.http.post('/server/api/v1/branches', body, httpOptions);
  }

  createResponseentityBranch(branch) {
    const body = JSON.stringify(branch);
    return this.http.post('/server/api/v1/branches/responseentity', body, httpOptions);
  }

  updateBranch(branch) {
    const id = branch.branchId;
    return this.http.put('server/api/v1/branches/' + id, branch, httpOptions);
  }

  deleteBranchById(branchId: string) {
    return this.http.delete('server/api/v1/branches/' + branchId);
  }
}
