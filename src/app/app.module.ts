import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosPageComponent } from './todos-page/todos-page.component';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { TodoComponent } from './todo/todo.component';
import { AddFormComponent } from './add-form/add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosPageComponent,
    FilterFormComponent,
    TodoComponent,
    AddFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
