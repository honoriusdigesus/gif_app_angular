import {Component, ElementRef, ViewChild} from '@angular/core';
import {GifService} from "../../services/gif.service";

@Component({
  selector: 'gif-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gitService:GifService) { }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gitService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
    console.log({newTag});
  }

}
