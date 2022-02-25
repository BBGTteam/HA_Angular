import { NgModule } from '@angular/core';

import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'

const MaterialComponents = [
  MatCardModule,
  MatSliderModule,
  MatButtonModule
]
 
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
