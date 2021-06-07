import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getUrl()
  {
    return "url('assets/images/img5.jpg')";
  }
  payments:any=[
    {
      paymentId:"100002281",
      emailIdOfStudent:"jayashree@gmail.com",
      applicationId:"2U66T5",
      paymentAmount:"500.00",
      description:"For Resistration",
      paymentDate:"22-01-2019",
      paymentStatus:"success"
    },
    {
      paymentId:"100002281",
      emailIdOfStudent:"jayashree@gmail.com",
      applicationId:"2U66T5",
      paymentAmount:"500.00",
      description:"For Resistration",
      paymentDate:"22-01-2019",
      paymentStatus:"success"
    },
    {
      paymentId:"100002281",
      emailIdOfStudent:"jayashree@gmail.com",
      applicationId:"2U66T5",
      paymentAmount:"500.00",
      description:"For Resistration",
      paymentDate:"22-01-2019",
      paymentStatus:"success"
    }
  ]
}
