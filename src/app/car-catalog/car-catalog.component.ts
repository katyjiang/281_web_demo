import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Cars } from '../cars';

@Component({
  selector: 'car-catalog',
  templateUrl: './car-catalog.component.html',
  styleUrls: ['./car-catalog.component.scss']
})
export class CarCatalogComponent implements OnInit {
	
    displayedColumns: string[] = ['name', 'type', 'size','manufacture','status'];
    data: Cars[] = [
		{
			_id: 1,
			name: 'car1',
			type: 'sport',
			size: 'small',
			manufacture: 'ford',
			status: 'available'
    },
	{
		_id:2,
		name: 'car2',
		type: 'suv',
		size: 'large',
		manufacture: 'Toyota',
		status: 'available'
},
{
	_id:3,
		name: 'car3',
		type: 'hybird',
		size: 'medium',
		manufacture: 'Honda',
		status: 'available'
}
];
    isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
     // this.api.getCars()
     //  .subscribe((res: any) => {
     //    this.data = res;
     //    console.log(this.data);
     //    this.isLoadingResults = false;
     //  }, err => {
     //    console.log(err);
     //    this.isLoadingResults = false;
     //  });
  }

}
