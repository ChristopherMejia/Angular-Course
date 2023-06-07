import { Component, Input, EventEmitter, Output } from '@angular/core';
import { booksService } from '../services/books.service';

@Component({
  selector: 'app-book',
  templateUrl: 'book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input() titleBook: string;
  @Output() bookClicked = new EventEmitter();

  constructor(private booksService: booksService) {}

  onClicked() {
    // this.bookClicked.emit();
    this.booksService.deleteBook(this.titleBook);
  }
}
