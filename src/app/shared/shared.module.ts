import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';
import { ListItemComponent } from './list/list-item/list-item.component';



@NgModule({
  declarations: [
    ListComponent,
    TaskComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
