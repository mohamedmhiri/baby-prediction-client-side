import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntropyComponent } from './entropy.component';

describe('EntropyComponent', () => {
  let component: EntropyComponent;
  let fixture: ComponentFixture<EntropyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntropyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntropyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
