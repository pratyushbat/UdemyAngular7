import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseMyMapComponent } from './use-my-map.component';

describe('UseMyMapComponent', () => {
  let component: UseMyMapComponent;
  let fixture: ComponentFixture<UseMyMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseMyMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseMyMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
