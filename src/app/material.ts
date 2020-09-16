import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [

  ],
  imports: [
    MatButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [],
  exports: [
    MatButtonModule
  ]
})
export class MaterialModule { }
