import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientilistComponent } from './clientilist.component';

describe('ClientilistComponent', () => {
  let component: ClientilistComponent;
  let fixture: ComponentFixture<ClientilistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientilistComponent]
    });
    fixture = TestBed.createComponent(ClientilistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
