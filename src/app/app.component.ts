import {Component} from '@angular/core';
import {AppService} from "./app.service";
import {Todo} from "./todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  todos: Todo[] = [];
  hashes: Array<string> = [];
  myId: number = 2343532;
  title = 'text-editor';

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.appService.getTodos()
      .subscribe(todos => this.todos = todos.slice(0, 5));
  }

  postTodo(todo: Todo): void {
    this.appService.postTodo(todo)
      .subscribe(todo => {
        this.todos = [...this.todos, todo];
        this.hashes = (this.todos.map((item) => item?.title).join().match(/#[0-9A-Za-zА-Яа-яё]+/g)  ?? [])
          .filter((item, index, self) => (self.indexOf(item)===index));
      });
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
