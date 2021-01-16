import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssHomeScreenComponent } from './css-home-screen.component';

describe('CssHomeScreenComponent', () => {
  let component: CssHomeScreenComponent;
  let fixture: ComponentFixture<CssHomeScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssHomeScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssHomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
