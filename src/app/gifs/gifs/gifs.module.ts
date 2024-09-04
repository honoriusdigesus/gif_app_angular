import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './component/search/search.component';
import { CardGifComponent } from './component/card-gif/card-gif.component';



@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    CardGifComponent
  ],
  imports: [
    CommonModule
  ], exports:[HomeComponent]
})
export class GifsModule { }
