import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloVidaPaiComponent } from './ciclo-vida-pai.component';

describe('CicloVidaPaiComponent', () => {
  let component: CicloVidaPaiComponent;
  let fixture: ComponentFixture<CicloVidaPaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CicloVidaPaiComponent]
    });
    fixture = TestBed.createComponent(CicloVidaPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
