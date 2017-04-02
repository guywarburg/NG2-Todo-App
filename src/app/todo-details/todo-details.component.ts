import { Component, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent {
  @Input() todo: Todo;
}
