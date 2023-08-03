import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveProjectComponent } from './wave-project.component';

describe('WaveProjectComponent', () => {
  let component: WaveProjectComponent;
  let fixture: ComponentFixture<WaveProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaveProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaveProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
