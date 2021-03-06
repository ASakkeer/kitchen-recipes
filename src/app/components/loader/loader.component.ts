import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(public spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
 
    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.spinner.hide();
    // }, 5000);
  }

}
