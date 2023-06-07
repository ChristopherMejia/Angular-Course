import { Subject } from 'rxjs';

export class booksService {
  booksSubject = new Subject(); //object observable to subcribe variable books when the state or behavier change
  private boooks = [
    'Libro de Christopher',
    'Libro de Aritmetica',
    'Libro de Gramatica',
  ];
  public getBooks() {
    return [...this.boooks];
  }
  public deleteBook(nameBook: string) {
    this.boooks = this.boooks.filter((book) => book !== nameBook);
    this.booksSubject.next();
  }

  public addBook(nameBook: string) {
    this.boooks.push(nameBook);
    this.booksSubject.next();
  }
}
