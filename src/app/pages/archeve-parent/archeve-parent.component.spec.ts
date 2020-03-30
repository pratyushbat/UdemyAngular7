import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcheveParentComponent } from './archeve-parent.component';

describe('ArcheveParentComponent', () => {
  let component: ArcheveParentComponent;
  let fixture: ComponentFixture<ArcheveParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcheveParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcheveParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
