import { Component } from '@angular/core';
import { Ibook } from './shared/models/Ibook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InputProject';

  sendMsgtoChild : string = 'This message is from parent';

  msgFromuser : string = ''

  booksInfo : Array<Ibook> = [
    {
      title : 'A Tale of Two Cities',
      author : 'Charles Dickens',
      price : 20.99,
      info: 'Historical fiction is a literary genre in which the plot takes place in a setting related to the past events, but is fictional'
    }
  ]
  titleVal! : string;
  authorVal ! : string;
  priceVal! : string;
  infoVal! : string;

  onStdAdded(e : Ibook){
    console.log(e)
    this.booksInfo.push(e)
  }

  msgFromChild(e : any){
    console.log(e)
  }

  userData(eve : string){
    console.log(eve);
    this.msgFromuser=eve
    
  }

}
