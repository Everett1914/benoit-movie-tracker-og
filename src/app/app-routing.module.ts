import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FulltableComponent } from './fulltable/fulltable.component';
import { MoviedashboardComponent } from './moviedashboard/moviedashboard.component';

const routes: Routes = [
	{ path: 'fulltable', component: FulltableComponent },
	{ path: 'moviedashboard', component: MoviedashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
