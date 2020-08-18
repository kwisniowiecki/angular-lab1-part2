import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.css'],
})
export class TodosPageComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'fold laundry',
      completed: false,
    },
    {
      task: 'exercise',
      completed: false,
    },
    {
      task: 'bake cookies',
      completed: true,
    },
  ];

  constructor() {}

  onDelete(index: number) {
    this.todos.splice(index, 1);
  }

  onAdd(todo: Todo) {
    this.todos.push(todo);
  }

  ngOnInit(): void {}
}
