import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { GetDataService } from './get-data.service';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent],

})
export class AppModule { }
