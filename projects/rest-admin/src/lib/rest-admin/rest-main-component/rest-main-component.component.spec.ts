import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestMainComponentComponent } from './rest-main-component.component';

describe('RestMainComponentComponent', () => {
  let component: RestMainComponentComponent;
  let fixture: ComponentFixture<RestMainComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestMainComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
