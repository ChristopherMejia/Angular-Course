import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartComponent } from '../start.component';
import { BooksComponent } from '../books/books.component';
import { LoginComponent } from '../security/login/login.component';
import { RegisterComponent } from '../security/register/register.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'books', component: BooksComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
