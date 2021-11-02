import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTaskComponent } from './task/crear-task/crear-task.component';
import { IndiceTaskComponent } from './task/indice-task/indice-task.component';

const routes: Routes = [
  {path:'tasks', component:IndiceTaskComponent},
  {path:'tasks/crear', component:CrearTaskComponent},
  {path:'**', redirectTo:'tasks'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
