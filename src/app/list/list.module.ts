import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponent} from "./list.component";
import { ListItemComponent } from './list-item/list-item.component';
import {FormsModule} from "@angular/forms";
import { FilterByTagPipe } from './pipes/filter-by-tag.pipe';
import { HashItemComponent } from './hash-item/hash-item.component';




@NgModule({
  declarations: [
    ListComponent,
    ListItemComponent,
    FilterByTagPipe,
    HashItemComponent
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
