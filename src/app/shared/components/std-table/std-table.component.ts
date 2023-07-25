import { Component, Input, OnInit } from '@angular/core';
import { Ibook } from '../../models/Ibook';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.css']
})
export class StdTableComponent implements OnInit {

  @Input()booksInfo! : Array<Ibook>;
  booksArray ! : Array<Ibook>
  constructor() { }

  ngOnInit(): void {
    this.booksArray = this.booksInfo
  }

}
