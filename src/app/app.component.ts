import { Component } from '@angular/core';
import { Informer } from './informer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homate-web';

  rooms = Informer.getInstance().rooms

  selectedRoom = this.rooms[0]

  roomClick(room){
    this.selectedRoom = room;
  }
}
