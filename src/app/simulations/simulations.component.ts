import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Simulations } from '../simulations';

@Component({
  selector: 'app-simulations',
  templateUrl: './simulations.component.html',
  styleUrls: ['./simulations.component.scss']
})
export class SimulationsComponent implements OnInit {
	
    displayedColumns: string[] = ['name','createdBy','totalRun'];
    data: Simulations[] = [];
    isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
     this.api.getSimilations()
      .subscribe((res: any) => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
