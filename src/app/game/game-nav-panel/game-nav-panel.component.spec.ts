import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameNavPanelComponent } from './game-nav-panel.component';

describe('GameNavPanelComponent', () => {
  let component: GameNavPanelComponent;
  let fixture: ComponentFixture<GameNavPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameNavPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameNavPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
