import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedService {
  private projects: any;
  private activeProject: any;

  private notify = new Subject<any>();
  notifyObservable$ = this.notify.asObservable();

  constructor() {}

  public closeModal() {
    this.notify.next();
  }
}
