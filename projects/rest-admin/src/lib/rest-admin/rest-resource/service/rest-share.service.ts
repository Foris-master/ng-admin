import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestShareService {
  listLoader = false;
  constructor() {}

  setLoader(value: boolean) {
    this.listLoader = value;
  }
}
