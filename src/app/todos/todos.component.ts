import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Todo } from '../todos.model';

@Component({
  selector: 'z-todos',
  templateUrl: './todos.component.html',
  styleUrls: [ './todos.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent {
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
