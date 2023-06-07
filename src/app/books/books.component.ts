import { Component, OnInit, OnDestroy } from '@angular/core';

import { booksService } from '../services/books.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
})
export class BooksComponent implements OnInit, OnDestroy {
  books = [];
  constructor(private booksService: booksService) {}
  private bookSubscription: Subscription; // declarate a new intance to delete the observable when the componente doesnt exist in the DOM

  saveBook({ form }) {
    const { value, valid } = form;
    this.booksService.addBook(value.nameBook);
  }

  // method to create the logic from component and access the methods and variables of booksService
  ngOnInit(): void {
    this.books = this.booksService.getBooks();
    this.bookSubscription = this.booksService.booksSubject.subscribe(() => {
      this.books = this.booksService.getBooks();
    }); // this section vinculate the observable with the array books
  }

  ngOnDestroy(): void {
    this.bookSubscription.unsubscribe();
  }
}
