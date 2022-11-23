import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../todo";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  readonly: boolean = true;
  bold: boolean = false;

  @Input()
  todo!: Todo;

  @Output()
  delete: EventEmitter<Todo> = new EventEmitter();

  @Output()
  update: EventEmitter<Todo> = new EventEmitter();

  deleteTodo(todo: Todo) {
    this.delete.emit(todo);
  }

  updateTodo(todo: Todo) {
    this.update.emit(todo);
  }

  editTodo(todo: Todo, title: string) {
    if(title.match(/#[0-9A-Za-zА-Яа-яё]+/g)) {
      this.bold = true;
    }
    if (!this.readonly){
      this.changeText(todo, title);
    }
    this.readonly = !this.readonly;

  }

  changeText(todo: Todo, title: string) {
    this.updateTodo({
      ...todo,
      title: title
    })
  }

  toggleCheckbox(todo: Todo){
    this.updateTodo({
      ...todo,
      completed: !todo.completed
    })
  }
}
