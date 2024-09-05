import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Gif, SearchResponse} from "../interfaces/gifs.interface";

const API_KEYS:string = "63LNyigUA8WPmTxptMkG24pHQFSjQuLF";

@Injectable({
  providedIn: 'root'
})
export class GifService {
  private _tagHistory: string[] = [];
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  public gifsList: Gif[] = [];


  constructor(private http: HttpClient) {
    this.loadLocalStorage();
    console.log({tagHistory: this._tagHistory});
  }

  get tagHistory(): string[] {
    return [...this._tagHistory];
  }

  private saveLocalStorage():void {
    localStorage.setItem('tagHistory', JSON.stringify(this._tagHistory));
  }


  async searchTag(tag: string): Promise<void> {
    if (tag.trim().length === 0) return;
    this.organizeHistory(tag);

    //Consulta a la API de Giphy
    const params = new HttpParams()
      .set('api_key',API_KEYS)
      .set('q',tag)
      .set('limit','12');

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params})
      .subscribe(response => {
        this.gifsList = response.data;
        console.log({gifs: this.gifsList});
      });

    //('https://api.giphy.com/v1/gifs/search?api_key=63LNyigUA8WPmTxptMkG24pHQFSjQuLF&q=valoran&limit=12')
  }

  private organizeHistory(tag:string):void {
    tag = tag.toLowerCase();
    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter(oldTag => oldTag !== tag);
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0,10);
    this.saveLocalStorage();
  }


  private loadLocalStorage():void {
    const tags = localStorage.getItem('tagHistory');
    if (!tags) return;
    this._tagHistory = JSON.parse(tags);
    if (this._tagHistory.length > 0) {
      this.searchTag(this._tagHistory[0]);
    }
    return;
  }
}
