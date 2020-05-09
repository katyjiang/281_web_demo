import { Component, OnInit } from '@angular/core';
export interface Transaction {
  item: string;
  usage: string;
  cost: number;
}
@Component({
  selector: 'app-billing-detail',
  templateUrl: './billing-detail.component.html',
  styleUrls: ['./billing-detail.component.scss']
})
export class BillingDetailComponent implements OnInit {
  title = 'Your Current Billing';
  displayedColumns: string[] = ['item', 'usage', 'cost'];
  transactions: Transaction[] = [
    {item: 'Autonomous Car', usage: '3 cars / 10 hr', cost: 90},
    {item: 'Autonomous Car Simulator', usage: '5 simulators / 10 hr', cost: 100},
    {item: 'Highway', usage: '80 miles', cost: 20},
    {item: 'Local', usage: '30 miles', cost: 16.5},
  ];

  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
