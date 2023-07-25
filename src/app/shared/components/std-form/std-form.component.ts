import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ibook } from '../../models/Ibook';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.css']
})
export class StdFormComponent implements OnInit {
  titleVal!: string;
  authorVal!: string;
  infoVal!: string;
  priceVal: any;
  booksInfo: any;

  @Output()addStdInfo : EventEmitter<Ibook> = new EventEmitter<Ibook>();

  @ViewChild("aName")aNameRef! : ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddBook(){
   let obj : Ibook = {
    title : this.titleVal,
    author : this.authorVal,
    price : this.priceVal,
    info : this.infoVal
   }
   console.log(obj);
   
   this.addStdInfo.emit(obj)
  }

}
