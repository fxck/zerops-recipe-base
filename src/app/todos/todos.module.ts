import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItemModule } from '../todo-item/todo-item.module';
import { TodosComponent } from './todos.component';

@NgModule({
  imports: [
    CommonModule,
    TodoItemModule,
    FormsModule
  ],
  declarations: [ TodosComponent ],
  exports: [ TodosComponent ]
})
export class TodosModule {

}
