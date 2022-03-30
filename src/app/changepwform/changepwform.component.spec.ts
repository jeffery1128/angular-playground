import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepwformComponent } from './changepwform.component';

describe('ChangepwformComponent', () => {
  let component: ChangepwformComponent;
  let fixture: ComponentFixture<ChangepwformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangepwformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepwformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
