import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdDataTransferService {

  private idSource = new BehaviorSubject('0');
  currentId = this.idSource.asObservable();

  constructor() { }

  changeId(id: string) {
    this.idSource.next(id);
  }
}
