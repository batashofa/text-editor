import {Component, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from "../todo";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public hash: string = '';
  public toggle: boolean = true;

  @Input()
  todos: Todo[] | undefined;

  @Input()
  hashes: Array<string> | undefined | null;

  @Output()
  delete: EventEmitter<Todo> = new EventEmitter();

  @Output()
  update: EventEmitter<Todo> = new EventEmitter();

  @Output()
  edit: EventEmitter<string> = new EventEmitter();

  constructor(
    private _elementRef: ElementRef
  ) {}

  filterTodos(hash: string) {
    this.hash = hash;
  }

  deleteTodos(hash: string) {
    this.hashes = this.hashes?.filter((n) => {return n != hash});
  }

  toggleList() {
    this.toggle = !this.toggle;
  }

  deleteTodo(todo: Todo) {
    this.delete.emit(todo);
  }
  
  updateTodo(todo: Todo) {
    this.update.emit(todo);
  }
}
