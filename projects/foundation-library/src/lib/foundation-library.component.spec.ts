import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundationLibraryComponent } from './foundation-library.component';

describe('FoundationLibraryComponent', () => {
  let component: FoundationLibraryComponent;
  let fixture: ComponentFixture<FoundationLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundationLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundationLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
