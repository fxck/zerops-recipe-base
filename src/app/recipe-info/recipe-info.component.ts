import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'zs-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: [ './recipe-info.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeInfoComponent {
  @Input()
  intro?: string;

  @Input()
  desc?: string;
}
