import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {
  private sendData = new BehaviorSubject('');
  currentData = this.sendData.asObservable();

  constructor() { }
  sendDataToComponent(str) {
    this.sendData.next(str);
  }
}
