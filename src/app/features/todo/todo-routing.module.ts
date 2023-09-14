import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoFormComponent } from './components/todo-form/todo-form.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'form', component: TodoFormComponent },
      { path: '', redirectTo: 'form', pathMatch: 'full' },
      { path: '**', redirectTo: 'form', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
