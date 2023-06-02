import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PubsubService {
  private subjects: Subject<any>[] = [];
  constructor() { }
  publish(eventname: string) {
    // ensure a subject for the event name exists
    this.subjects[eventname] = this.subjects[eventname] || new Subject<any>();

    // publish event
    this.subjects[eventname].next();
  }
  on(eventname: string) {
    // ensure a subject for the event name exists
    this.subjects[eventname] = this.subjects[eventname] || new Subject<any>();

    // return observable
    return this.subjects[eventname].asObservable()
  }
}
