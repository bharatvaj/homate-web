import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../room';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() room: Room;

  constructor() { }

  ngOnInit() {
  }

}
