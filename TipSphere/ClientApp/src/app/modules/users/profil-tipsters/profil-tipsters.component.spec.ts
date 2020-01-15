import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilTipstersComponent } from './profil-tipsters.component';

describe('ProfilTipstersComponent', () => {
  let component: ProfilTipstersComponent;
  let fixture: ComponentFixture<ProfilTipstersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilTipstersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilTipstersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
