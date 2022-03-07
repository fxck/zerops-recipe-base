import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RecipeInfoComponent } from './recipe-info.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ RecipeInfoComponent ],
  exports: [ RecipeInfoComponent ]
})
export class RecipeInfoModule {

}
