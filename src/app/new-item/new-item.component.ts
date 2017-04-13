import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent {
  val: string;
  @Output() newTask: EventEmitter<Todo> = new EventEmitter();

  addTask(event: any) {
    const myTodo = new Todo;
    myTodo.name = this.val;
    this.newTask.emit(myTodo);
    this.val = '';
  }
}
