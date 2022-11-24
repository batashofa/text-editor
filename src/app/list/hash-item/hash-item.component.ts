import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppService} from 'src/app/app.service';
import {Todo} from "../../todo";


@Component({
  selector: 'app-hash-item',
  templateUrl: './hash-item.component.html',
  styleUrls: ['./hash-item.component.css']
})
export class HashItemComponent {
  filteredHashes = [];

  @Input()
  hash!: string;
  
  @Output()
  hashFilter: EventEmitter<string> = new EventEmitter();

  @Output()
  hashDelete: EventEmitter<string> = new EventEmitter();

  filter(hash: string): void {
    this.hashFilter.emit(hash)
  }

  delete(hash: string): void {
    this.hashDelete.emit(hash);
  }
}
