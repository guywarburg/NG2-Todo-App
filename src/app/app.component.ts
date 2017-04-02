import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Todo List';
  todos = TODOS;
  selectedTodo: Todo;

  onSelect(todo: Todo){
    this.selectedTodo = todo;
  }

  onComplete(todo: Todo){
    this.todos = this.todos.filter((item: Todo) => {
      return item.id !== todo.id;
    })
  }

  newTask(task: Todo) {
    let myId = (this.todos[this.todos.length-1].id + 1);
    task.id = myId;
    this.todos.push(task);
  }
}

const TODOS: Todo[] = [
  { id: 11, name: 'Build Todo App' },
  { id: 12, name: 'Refactor Todo Item Component' },
  { id: 13, name: 'Add getTodo Service' },
  { id: 14, name: 'Add tests' }
];