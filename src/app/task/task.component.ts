import {Component} from '@angular/core';
import {Todo} from "../todo";
import {AppService} from "../app.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent  {
  title: string = 'Todo List App';
  imgURL: string = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg';
  modal: string = ' ';
  myId: number = 2343532;
  constructor(private appService: AppService) { }

  inputHandler(value: any) {
    this.modal = 'The task: ' + value;
  }

  postTodo(title: string): void {
    const postTodo: Todo = {
      userId: this.myId,
      title: title,
      body: ""
    }
    this.appService.postTodo(postTodo)
      .subscribe(todo => console.log(todo));
  }


  addedTask(title: string) {
    this.modal += ' added';
    this.postTodo(title);
  }

}
