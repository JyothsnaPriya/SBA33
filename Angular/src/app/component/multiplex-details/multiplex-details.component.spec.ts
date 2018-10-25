import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplexDetailsComponent } from './multiplex-details.component';

describe('MultiplexDetailsComponent', () => {
  let component: MultiplexDetailsComponent;
  let fixture: ComponentFixture<MultiplexDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplexDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplexDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
