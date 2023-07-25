import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { UsersComponent } from './shared/components/users/users.component';
import { BooksDataComponent } from './shared/components/books-data/books-data.component';
import { FormsModule } from '@angular/forms';
import { StdFormComponent } from './shared/components/std-form/std-form.component';
import { StdTableComponent } from './shared/components/std-table/std-table.component';
import { AuthorInfoComponent } from './shared/components/author-info/author-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    UsersComponent,
    BooksDataComponent,
    StdFormComponent,
    StdTableComponent,
    AuthorInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
