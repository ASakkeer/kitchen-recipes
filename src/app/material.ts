import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [

  ],
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [],
  exports: [
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialModule { }
