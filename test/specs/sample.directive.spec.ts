import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  ElementRef,
  Renderer
} from '@angular/core';

import { SampleDirective } from '../../src';

@Component({
  template: `<div altSample [text]="textStub"></div>`
})
class StubComponent {
  textStub: string;
}

describe('SampleDirective', () => {

  let fixture: ComponentFixture<StubComponent>;

  beforeEach(() => {
    TestBed
      .configureTestingModule({
        declarations: [
          StubComponent,
          SampleDirective
        ],
        schemas: [
          CUSTOM_ELEMENTS_SCHEMA
        ]
      })
      .compileComponents();

    fixture = TestBed.createComponent(StubComponent);
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should have the text "Sample Directive: Text"', () => {
    fixture.detectChanges();

    const elementContent: string = fixture
      .debugElement
      .query(By.css('div'))
      .nativeElement
      .innerHTML;

    expect(elementContent).toEqual('Sample Directive: Text');
  });

  it('should have the text "Sample Directive: Changed text"', () => {

    fixture.componentInstance.textStub = 'Changed text';
    fixture.detectChanges();

    const elementContent: string = fixture
      .debugElement
      .query(By.css('div'))
      .nativeElement
      .innerHTML;

    expect(elementContent).toEqual('Sample Directive: Changed text');
  });

});
