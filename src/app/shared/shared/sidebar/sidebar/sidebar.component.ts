import { Component } from '@angular/core';
import {GifService} from "../../../../gifs/gifs/services/gif.service";

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private gifService:GifService) { }

  historyConsultedTags(): string[] {
    return this.gifService.tagHistory;
  }

  searchTag(tag: string) {
    this.gifService.searchTag(tag);
  }

}
