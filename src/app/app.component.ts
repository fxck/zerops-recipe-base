import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Todo } from './todos.model';
import { TodosServices } from './todos.service';

@Component({
  selector: 'zr-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  recipeInfo: {
    intro: string;
    description: string;
    knowledgeBaseLink: string;
    repositories: { [key: string]: string; };
    services: any[];
  };

  todos: Todo[];

  constructor(private _todosService: TodosServices) {

    this._todosService
      .findAll$()
      .subscribe((todos) => this.todos = todos)

    this.recipeInfo = JSON.parse(environment.recipeConfig);

  }

  addTodo(text: string) {
    this._todosService
      .add$({ text })
      .subscribe((todo) => this.todos = [
        ...this.todos,
        todo
      ]);
  }

  deleteTodo(id: string) {
    this._todosService
      .delete$(id)
      .subscribe(() => this.todos = this.todos.filter((itm) => itm.id != id));
  }

  updateTodo(id: string, data: Partial<Todo>) {
    this._todosService
      .update$(id, data)
      .subscribe(() => this.todos = this.todos.reduce((arr, itm) => {
        arr.push(itm.id === id ? { ...itm, ...data } : itm);
        return arr;
      }, [] as Todo[]));
  }

}
