import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RecipeInfoModule } from './recipe-info/recipe-info.module';
import { TodosModule } from './todos/todos.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    TodosModule,
    RecipeInfoModule,
    HttpClientModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
