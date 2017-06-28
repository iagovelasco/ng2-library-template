import { NgModule } from '@angular/core';
import { SampleComponent } from './sample.component';
import { SampleDirective } from './sample.directive';

@NgModule({
  declarations: [
    SampleDirective,
    SampleComponent
  ],
  exports: [
    SampleDirective,
    SampleComponent
  ]
})
export class SampleModule { }
