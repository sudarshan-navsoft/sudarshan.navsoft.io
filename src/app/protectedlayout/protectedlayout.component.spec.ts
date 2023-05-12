import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedlayoutComponent } from './protectedlayout.component';

describe('ProtectedlayoutComponent', () => {
  let component: ProtectedlayoutComponent;
  let fixture: ComponentFixture<ProtectedlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtectedlayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectedlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
