import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { formatCurrency } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class AddFormComponent implements OnInit {
  @Output() added = new EventEmitter<Todo>();

  constructor() {}

  addTodo(form: NgForm) {
    let newTodo: Todo = {
      task: form.value.task,
      completed: false,
    };
    this.added.emit(newTodo);
  }

  ngOnInit(): void {}
}
