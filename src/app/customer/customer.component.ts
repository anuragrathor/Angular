import { Component, OnInit } from '@angular/core';
import { LoaderServiceService } from '../appServices/loader/loader-service.service';
import { ToasterServiceService } from '../appServices/toaster/toaster-service.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private loader: LoaderServiceService,private toaster: ToasterServiceService,private fb: FormBuilder) {
     //loader.loaderToggle(true);
     //toaster.showSuccess('Welcome dear');
     
   }

    customerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: this.fb.group({
        country: ['', Validators.required],
        state: ['', Validators.required],
        city: ['', Validators.required],
        zip: ['', Validators.required]
      }),
    });




  onSubmit() {
    console.log(this.customerForm.value);
  }

  resetForm() {
    this.customerForm.reset();
  }


  ngOnInit(): void {
    this.setDefault();
  }

  setDefault() {
    let customerData = {
      firstname: "Sachin",
      lastname: "Tendulkar",
      address: {
        country: "Perry Cross Rd",
        state: "Mumbai",
        city: "Mumbai",
        zip: "400050"
      }
    };
 
    this.customerForm.setValue(customerData);
  }

}
