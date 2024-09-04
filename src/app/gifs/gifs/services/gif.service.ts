import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private _tagHistory: string[] = [];

  get tagHistory(): string[] {
    return [...this._tagHistory];
  }

  searchTag(tag: string):void {
    this._tagHistory.unshift(tag);
  }

  constructor() { }
}
