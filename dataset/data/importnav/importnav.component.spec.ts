import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportnavComponent } from './importnav.component';

describe('ImportnavComponent', () => {
  let component: ImportnavComponent;
  let fixture: ComponentFixture<ImportnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
