import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dash-board-component',
  templateUrl: './dash-board-component.component.html',
  styleUrls: ['./dash-board-component.component.scss']
})
export class DashBoardComponentComponent implements OnInit {

  constructor() { }
  @Input() title : string;
  @Input() count: string;

  ngOnInit(): void {
  }

}
