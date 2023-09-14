import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TodoFormComponent],
  imports: [CommonModule, TodoRoutingModule, CoreModule, SharedModule],
})
export class TodoModule {}
