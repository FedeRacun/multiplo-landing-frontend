import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './core/container/container.component';
import { ViewProjectComponent } from './views/view-project/view-project.component';

const routes: Routes = [
  { path: 'home', component: ContainerComponent },
  { path: 'viewProject', component: ViewProjectComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
