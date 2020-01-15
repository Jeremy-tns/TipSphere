import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipstersComponent } from './tipsters.component';

describe('TipstersComponent', () => {
  let component: TipstersComponent;
  let fixture: ComponentFixture<TipstersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipstersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipstersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
