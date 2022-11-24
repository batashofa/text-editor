import {Component, EventEmitter, Output} from '@angular/core';
import {Todo} from "../todo";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent  {
  title: string = 'Text editor with tags';
  imgURL: string = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg';
  myId: number = 2343532;

  @Output()
  addTodo: EventEmitter<Todo> = new EventEmitter();

  addedTask(title: string, event: any) {
    const newTodo: Todo = {
      userId: this.myId,
      title: title,
      completed: false
    }
    event.preventDefault();
    this.addTodo.emit(newTodo);
  }
}
