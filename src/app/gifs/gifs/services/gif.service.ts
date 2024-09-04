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
    if (tag.trim().length === 0) return;
    this.organizeHistory(tag);
  }

  private organizeHistory(tag:string):void {
    tag = tag.toLowerCase();
    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter(oldTag => oldTag !== tag);
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0,10);
  }

  constructor() { }
}
