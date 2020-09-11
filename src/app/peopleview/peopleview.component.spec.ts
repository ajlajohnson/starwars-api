import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleviewComponent } from './peopleview.component';

describe('PeopleviewComponent', () => {
  let component: PeopleviewComponent;
  let fixture: ComponentFixture<PeopleviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
