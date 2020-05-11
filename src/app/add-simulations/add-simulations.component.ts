import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-add-simulations',
  templateUrl: './add-simulations.component.html',
  styleUrls: ['./add-simulations.component.scss']
})
export class AddSimulationsComponent implements OnInit {
    simulationsForm: FormGroup;
    name = '';
    totalRun = '';
  //  age: number = null;
    createdBy = '';
    isLoadingResults = false;
   // matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
	  //initial validation
	  this.simulationsForm = this.formBuilder.group({
	        name : [null, Validators.required],
	        totalRun: [null, Validators.required],
	        createdBy : [null, Validators.required],
	      });
  }
  
  onFormSubmit() {
     this.isLoadingResults = true;
   //   this.api.addCars(this.carsForm.value)
   //     .subscribe((res: any) => {
   //         const id = res._id;
   //         this.isLoadingResults = false;
   //         this.router.navigate(['/cars-details', id]);
   //       }, (err: any) => {
   //         console.log(err);
   //         this.isLoadingResults = false;
   //       });
  }

}
