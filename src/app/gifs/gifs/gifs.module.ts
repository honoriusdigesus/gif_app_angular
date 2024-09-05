import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './component/search/search.component';
import { CardGifComponent } from './component/card-gif/card-gif.component';
import { CardComponent } from './component/card/card.component';
import {SharedModule} from "../../shared/shared/shared.module";



@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    CardGifComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ], exports:[HomeComponent]
})
export class GifsModule { }
