import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from "../todo";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  toggle: boolean = true;

  @Input()
  todos: Todo[] | undefined;

  @Output()
  delete: EventEmitter<Todo> = new EventEmitter();

  @Output()
  update: EventEmitter<Todo> = new EventEmitter();

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
