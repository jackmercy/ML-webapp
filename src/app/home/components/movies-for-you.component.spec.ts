import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesForYouComponent } from './movies-for-you.component';

describe('MoviesForYouComponent', () => {
  let component: MoviesForYouComponent;
  let fixture: ComponentFixture<MoviesForYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesForYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
