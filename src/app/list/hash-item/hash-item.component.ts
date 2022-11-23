import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hash-item',
  templateUrl: './hash-item.component.html',
  styleUrls: ['./hash-item.component.css']
})
export class HashItemComponent {
  @Input()
  hash!: string;
}
