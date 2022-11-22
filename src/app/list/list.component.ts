import {Component} from '@angular/core';
import {AppService} from "../app.service";
import {Todo} from "../todo";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  toggle: boolean = true;
  todos: Todo[] = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.appService.getTodos()
      .subscribe(todos => this.todos = todos.slice(0,7));
  }
  toggleList() {
    this.toggle = !this.toggle;
  }

}
