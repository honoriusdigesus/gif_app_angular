import { Component } from '@angular/core';
import {GifService} from "../../services/gif.service";
import {Gif} from "../../interfaces/gifs.interface";

@Component({
  selector: 'gifs-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    constructor(private gifService: GifService) { }

  get gifs():Gif[] {
    return this.gifService.gifsList;
  }
}
