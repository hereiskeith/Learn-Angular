import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentIntegrationComponent } from './component-integration.component';

describe('ComponentIntegrationComponent', () => {
  let component: ComponentIntegrationComponent;
  let fixture: ComponentFixture<ComponentIntegrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentIntegrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
