import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssLoginScreenComponent } from './css-login-screen.component';

describe('CssLoginScreenComponent', () => {
  let component: CssLoginScreenComponent;
  let fixture: ComponentFixture<CssLoginScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssLoginScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssLoginScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
