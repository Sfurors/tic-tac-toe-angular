import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GameComponent } from './game.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let mockGameService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent ],
      imports: [HttpClientTestingModule, MatSnackBarModule],
    })
    .compileComponents();
    mockGameService = jasmine.createSpyObj(['submit', 'resetGameTable', 'getGameTableState']);
    component = new GameComponent(mockGameService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
