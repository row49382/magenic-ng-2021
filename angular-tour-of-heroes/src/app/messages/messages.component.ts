import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // public service so it can be bound in the corresponding html form
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
  }

}
