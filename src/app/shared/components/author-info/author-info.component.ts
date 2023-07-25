import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-info',
  templateUrl: './author-info.component.html',
  styleUrls: ['./author-info.component.css']
})
export class AuthorInfoComponent implements OnInit {

  data : string='AuthorInfo'

  constructor() { }

  ngOnInit(): void {
  }

  onDataChange(val:string){
    this.data=val;
  }

}
