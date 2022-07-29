import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestResourceDetailComponent } from './rest-resource-detail.component';

describe('RestResourceDetailComponent', () => {
  let component: RestResourceDetailComponent;
  let fixture: ComponentFixture<RestResourceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestResourceDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestResourceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
