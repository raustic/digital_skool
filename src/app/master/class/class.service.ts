import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
   records = [
  { id: 1, name: 'I', section: 'A', remark: 'None' },
  { id: 1, name: 'I', section: 'A', remark: 'None' },
  { id: 1, name: 'II', section: 'A', remark: 'None' },
  { id: 1, name: 'III', section: 'A', remark: 'None' },
  { id: 1, name: 'IV', section: 'A', remark: 'None' },
  { id: 1, name: 'V', section: 'A', remark: 'None' },
  { id: 1, name: 'VI', section: 'A', remark: 'None' },
  { id: 1, name: 'VII', section: 'A', remark: 'None' },
  { id: 1, name: 'VIII', section: 'A', remark: 'None' },
];
  constructor() { }

  public _records() {
    return this._records;
  }
  public _create(model: any) {
    this.records.push(model);
  }
  public _record(model: any) {
    return this.records.indexOf(model);
  }
  public _delete(model: any) {
    let _index = this.records.indexOf(model);
    let record = this.records.splice(0, _index);
    }
}
