import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { DataformComponent } from './dataform/dataform.component';

const routes:Routes=[
  {path:'Task', component:TaskComponent},
  {path:'feedback', component:FeedbackComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    FeedbackComponent,
    DataformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(routes)
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
