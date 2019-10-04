import { Component, OnInit, Input } from '@angular/core';
import { MessageType } from './message-type';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {
  @Input() messageType: MessageType;
  constructor() { }

  ngOnInit() {
  }
}
