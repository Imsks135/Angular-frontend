import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  { Book } from './Book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient){};

  addBook(book: Book): Observable<any> {
    return this.http.post('http://localhost:3000/books', book);
  }
}
