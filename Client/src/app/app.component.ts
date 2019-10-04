import { Component, OnInit } from '@angular/core';
import { MessageType } from './shared/message-box/message-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public messageType = MessageType;

  ngOnInit() {
  }
}
