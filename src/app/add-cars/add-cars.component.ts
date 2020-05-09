import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-add-cars',
  templateUrl: './add-cars.component.html',
  styleUrls: ['./add-cars.component.scss']
})
export class AddCarsComponent implements OnInit {
	
    casesForm: FormGroup;
    name = '';
    type = '';
  //  age: number = null;
    size = '';
    manufacture = '';
    status = '';
   // status = '';
   // statusList = ['Positive', 'Dead', 'Recovered'];
   // genderList = ['Male', 'Female'];
    isLoadingResults = false;
    matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
	  //initial validation
	  this.casesForm = this.formBuilder.group({
	        name : [null, Validators.required],
	        type: [null, Validators.required],
	        size : [null, Validators.required],
	        manufacture: [null, Validators.required],
	        status: [null, Validators.required],
	      //  country : [null, Validators.required],
	      //  status : [null, Validators.required]
	      });
  }
  
  onFormSubmit() {
     this.isLoadingResults = true;
     this.api.addCars(this.carsForm.value)
       .subscribe((res: any) => {
           const id = res._id;
           this.isLoadingResults = false;
           this.router.navigate(['/cars-details', id]);
         }, (err: any) => {
           console.log(err);
           this.isLoadingResults = false;
         });
   }

}
