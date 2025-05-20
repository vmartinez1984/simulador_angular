import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImuladorComponent } from './imulador.component';

describe('ImuladorComponent', () => {
  let component: ImuladorComponent;
  let fixture: ComponentFixture<ImuladorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImuladorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImuladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
