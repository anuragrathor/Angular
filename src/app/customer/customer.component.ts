import { Component, OnInit } from '@angular/core';
import { LoaderServiceService } from '../appServices/loader/loader-service.service';
import { ToasterServiceService } from '../appServices/toaster/toaster-service.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private loader: LoaderServiceService,private toaster: ToasterServiceService) {
     //loader.loaderToggle(true);
     toaster.showSuccess('Welcome dear');
   }

  ngOnInit(): void {
  }

}
