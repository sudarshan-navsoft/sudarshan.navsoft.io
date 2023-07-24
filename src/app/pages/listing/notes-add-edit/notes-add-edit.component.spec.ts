import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesAddEditComponent } from './notes-add-edit.component';

describe('NotesAddEditComponent', () => {
  let component: NotesAddEditComponent;
  let fixture: ComponentFixture<NotesAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
