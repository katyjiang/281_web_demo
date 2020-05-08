import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  titles = [{
    title: "Real Autonomous Car",
    count: "949"
  },
    {
      title: "Autonomous Car Simulator",
      count: "1049"
    },
    {
      title: "Scenario Script",
      count: "58"
    },
    {
      title: "Reported Problems",
      count: "49"
    },{
      title: "Total Client Count",
      count: "786"
    },
    {
      title: "Total Project Number",
      count: "146"
    },
    {
      title: "Active Autonomous Car",
      count: "88"
    },
    {
      title: "Total Documents",
      count: "754"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
