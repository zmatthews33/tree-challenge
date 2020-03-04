import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodetreeComponent } from './nodetree.component';

describe('NodetreeComponent', () => {
  let component: NodetreeComponent;
  let fixture: ComponentFixture<NodetreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodetreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodetreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
