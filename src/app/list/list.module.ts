import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponent} from "./list.component";
import { ListItemComponent } from './list-item/list-item.component';
import {FormsModule} from "@angular/forms";
import { FilterByTagPipe } from './pipes/filter-by-tag.pipe';




@NgModule({
  declarations: [
    ListComponent,
    ListItemComponent,
    FilterByTagPipe
  ],
  exports: [
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ListModule { }
