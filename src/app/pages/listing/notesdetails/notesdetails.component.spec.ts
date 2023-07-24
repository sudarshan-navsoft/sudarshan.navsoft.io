import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesdetailsComponent } from './notesdetails.component';

describe('NotesdetailsComponent', () => {
  let component: NotesdetailsComponent;
  let fixture: ComponentFixture<NotesdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
