import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {Todo} from "./todo";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private todosUrl = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);
  }

  postTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo);
  }
}
