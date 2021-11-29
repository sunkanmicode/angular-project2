import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-server',
  templateUrl: './top-server.component.html',
  styleUrls: ['./top-server.component.css'],
})
export class TopServerComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was creaded!';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onServerCreateStatus() {
    return (this.serverCreationStatus =
      'Server was created ' + this.serverName);
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }
}
