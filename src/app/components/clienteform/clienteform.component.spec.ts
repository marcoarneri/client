import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteformComponent } from './clienteform.component';

describe('ClienteformComponent', () => {
  let component: ClienteformComponent;
  let fixture: ComponentFixture<ClienteformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteformComponent]
    });
    fixture = TestBed.createComponent(ClienteformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
