import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  @Input() image:any;
  @Input() header:any;
  @Input() description:any;
  @Input() event:any;

  constructor() { }

  ngOnInit() {
  }
}
