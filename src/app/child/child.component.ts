import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()msgFromParent! : string;

  @Output()msgToParent : EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
    console.log(this.msgFromParent)
  }

  sendMsgtoParent(e : Event){
    this.msgToParent.emit('Message from child')
  }
}
