import { Component, OnInit } from '@angular/core';
import { LoaderServiceService } from '../appServices/loader/loader-service.service';
import { ToasterServiceService } from '../appServices/toaster/toaster-service.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  submitted = false;

  constructor(private loader: LoaderServiceService,private toaster: ToasterServiceService,private fb: FormBuilder) {
    //loader.loaderToggle(true);
    //toaster.showSuccess('Welcome dear');
  }

  customerForm = this.fb.group({
    firstName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', [
                      Validators.required,
                      Validators.minLength(6),
                      Validators.maxLength(20)
                    ]
              ],
    confirm_password: ['', Validators.required],
    mobile_no: ['', Validators.required],
    address: this.fb.group({
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', Validators.required]
    }),
  });


  //Provide Form Control to this f  
  get f(){
    return this.customerForm.controls;
  }

 onSubmit() {
    this.submitted = true;

    if (this.customerForm.invalid) {
      return;
    }

    console.log(this.customerForm.value);
 }

 resetForm() {
    this.submitted = false;
    this.customerForm.reset();
 }


 ngOnInit(): void {
   this.setDefault();
 }

 setDefault() {
   let customerData = {
     firstname: "Sachin",
     email: "Tendulkar",
     password: "",
     confirm_password: "",
     mobile_no: "9413004367",
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
