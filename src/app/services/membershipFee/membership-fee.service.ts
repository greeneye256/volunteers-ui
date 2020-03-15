import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MembershipFeeService {

  constructor(private http: HttpClient) { }

  addMembershipFee(membershipFee) {
    alert('esti in membershipFee service')
    const body = JSON.stringify(membershipFee);
    return this.http.post('server/api/v1/membership-fee', body, httpOptions);
  }
}
