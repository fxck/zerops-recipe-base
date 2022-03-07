import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Todo } from '../todos.model';

@Component({
  selector: 'zs-todos',
  templateUrl: './todos.component.html',
  styleUrls: [ './todos.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent {

  addValue = '';

  @Input()
  data: Todo[];

  @Output()
  add = new EventEmitter<string>();

  @Output()
  remove = new EventEmitter<string>();

  @Output()
  update = new EventEmitter<{
    id: string;
    data: Partial<Todo>;
  }>();

}
