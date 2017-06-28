import { TestBed, async } from '@angular/core/testing';

import { SampleComponent } from '../../src';

describe('SampleComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SampleComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(SampleComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it(`should have the text "A sample component."`, async(() => {
    const fixture = TestBed.createComponent(SampleComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').textContent).toContain('A sample component.');
  }));

});
