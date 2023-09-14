import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoFormComponent } from './components/todo-form/todo-form.component';

@NgModule({
  declarations: [TodoFormComponent],
  imports: [CommonModule, TodoRoutingModule],
})
export class TodoModule {}
