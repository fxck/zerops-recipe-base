import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Todo } from './todos.model';
import { TodosServices } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data = JSON.parse(environment.configuration);
  todos: Todo[];

  constructor(private _todosService: TodosServices) {
    this._todosService
      .findAll$()
      .subscribe((todos) => this.todos = todos)
  }

}
