import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Todo } from './todos.model';

@Injectable({ providedIn: 'root' })
export class TodosServices {
  private _entity = 'todos';
  private _endpoint = `${environment.apiEndpoint}/${this._entity}`;

  constructor(private _httpClient: HttpClient) {}

  findAll$() {
    return this._httpClient.get<Todo[]>(this._endpoint);
  }

  update$(id: string, data: Partial<Todo>) {
    return this._httpClient.patch(
      `${this._endpoint}/${id}`,
      data
    );
  }

  delete$(id: string) {
    return this._httpClient.delete(`${this._endpoint}/${id}`);
  }

  add$(data: Partial<Todo>) {
    return this._httpClient.post(`${this._endpoint}`, data);
  }

}
