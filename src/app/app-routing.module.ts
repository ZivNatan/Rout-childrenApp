import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component'


const routes: Routes = [
  { path: 'list', component: ListComponent,
  children: [

     { path: 'add', component: AddComponent },
     { path: 'edit/:id', component: EditComponent }
  ]

 },

];

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
