import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoFormComponent, TodoListComponent, ListItemComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    CoreModule,
    SharedModule,
    FormsModule,

    NgbDatepickerModule,
  ],
})
export class TodoModule {}
