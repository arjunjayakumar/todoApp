import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { HomePageComponent } from 'src/app/core/layout/home-page/home-page.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      { path: 'form', component: TodoFormComponent },
      { path: 'list', component: TodoListComponent },
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
