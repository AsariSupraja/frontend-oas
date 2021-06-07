import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getUrl()
  {
    return "url('assets/images/img4.jpg')";
  }
  documents:any=[
    {
      documentId:"42511SS01",
      documentName:"SaiDoct",
      documentUrl:"http://saiurlo3/king",
      applicantId:"33245RT67",
      emailId:"saitezawasi@gmail.com",
      documentStatus:"submitted"
    },
    {
      documentId:"42511SS01",
      documentName:"SaiDoct",
      documentUrl:"http://saiurlo3/king",
      applicantId:"33245RT67",
      emailId:"saitezawasi@gmail.com",
      documentStatus:"submitted"
    },
    {
      documentId:"42511SS01",
      documentName:"SaiDoct",
      documentUrl:"http://saiurlo3/king",
      applicantId:"33245RT67",
      emailId:"saitezawasi@gmail.com",
      documentStatus:"submitted"
    }
  ]
}
