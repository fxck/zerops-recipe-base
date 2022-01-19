import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Todo } from '../todos.model';

@Component({
  selector: 'z-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: [ './todo-item.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {
  @Input()
  data: Todo;

  @Output()
  remove = new EventEmitter<string>();

  @Output()
  update = new EventEmitter<{
    id: string;
    data: Partial<Todo>;
  }>();
}
