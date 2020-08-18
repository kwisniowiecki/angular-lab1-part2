import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todoRef: Todo;
  @Output() deleted = new EventEmitter<void>();

  constructor() {}

  deleteTodo() {
    this.deleted.emit();
  }

  ngOnInit(): void {}
}
