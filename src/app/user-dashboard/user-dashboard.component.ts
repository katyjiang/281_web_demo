import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
	
    titles = [{
      title: "Simulations",
      count: "9"
    },
      {
        title: "bugs to fix",
        count: "100"
      },
      {
        title: "Tests",
        count: "7"
      },
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
