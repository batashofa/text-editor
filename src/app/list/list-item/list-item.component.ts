import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../todo";
import {AppService} from "../../app.service";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  checked: boolean = true;
  @Input() todo: Todo | undefined;

}
