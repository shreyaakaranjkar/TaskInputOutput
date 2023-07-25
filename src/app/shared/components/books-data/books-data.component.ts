import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-data',
  templateUrl: './books-data.component.html',
  styleUrls: ['./books-data.component.css']
})
export class BooksDataComponent implements OnInit {

  @Input()booksdata ! : Array<any>
  constructor() { }

  ngOnInit(): void {
    console.log(this.booksdata)
  }

}
