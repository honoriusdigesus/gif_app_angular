import {Component, Input} from '@angular/core';
import {Gif} from "../../interfaces/gifs.interface";

@Component({
  selector: 'card-gif',
  templateUrl: './card-gif.component.html',
  styleUrl: './card-gif.component.css'
})
export class CardGifComponent {

  @Input()
  public gifs: Gif[] = [];
}
