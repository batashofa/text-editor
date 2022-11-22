import { Component } from '@angular/core';
import { AppService } from "./app.service";
import { Todo } from "./todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = [];
  myId: number = 2343532;
  title = 'text-editor';

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.appService.getTodos()
      .subscribe(todos => this.todos = todos.slice(0,5));
  }

  postTodo(todo: Todo): void {
    this.appService.postTodo(todo)
      .subscribe(todo => this.todos = [...this.todos, todo]);
  }

  deleteTodo(todo: Todo): void {
    this.appService.deleteTodo(todo.id)
      .subscribe(
        (_) => {
          this.todos = this.todos.filter((t) => t.id !== todo.id);
        }
      );
  }

  updateTodo(todo: Todo): void {
    this.appService.updateTodo(todo)
      .subscribe(
        updatedTodo => {
          this.todos = this.todos.map(todo => {
            if (todo.id === updatedTodo.id) {
              return updatedTodo;
            } else {
              return todo;
            }
          });
        }
      );
  }
}
