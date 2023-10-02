import { Component } from '@angular/core';
import { BooksService } from './books.service';
import { Book } from './Book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
   
  constructor(private bookservice:BooksService){};

  ngOnInit():void {};

  book: Book = new Book;

  addBook(){
       this.bookservice.addBook(this.book).subscribe(
        (data: any)=>{
          alert('book added');
        },
        (error: any)=>{
          console.log(error);
        }
       );
     }
}
