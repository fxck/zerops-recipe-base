import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
}
