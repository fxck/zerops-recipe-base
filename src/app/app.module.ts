import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProjectDiagramModule } from './project-diagram/project-diagram.module';
import { TodosModule } from './todos/todos.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    TodosModule,
    ProjectDiagramModule,
    HttpClientModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
