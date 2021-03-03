import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GameComponent } from './game.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CellCoordinates, Sign } from './models/game.model';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let mockGameService;
  let currentTableState: Sign[][];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent ],
      imports: [HttpClientTestingModule, MatSnackBarModule],
    })
    .compileComponents();
    mockGameService = jasmine.createSpyObj(['submit', 'resetGameTable', 'getGameTableState']);
    component = new GameComponent(mockGameService);
    currentTableState = [
      [null, null, null], [null, null, null], [null, null, null]
    ];
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    component.currentTableState = currentTableState;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save previous cell as current cell in order to save move history', () => {
    // given
    component.previousSelection = null;
    const currentCellCoordinates = {column: 1, row: 1} as CellCoordinates;
    // when
    component.onCellSelected(currentCellCoordinates);
    // then
    expect(component.previousSelection).toEqual(currentCellCoordinates);
  });

  it('should clean previous cell sign as new is selected', () => {
    // given
    component.currentPlayer = Sign.O;
    component.currentTableState[0][0] = Sign.O;
    component.previousSelection = {column: 0, row: 0} as CellCoordinates;
    const currentCellCoordinates = {column: 1, row: 1} as CellCoordinates;
    // when
    component.onCellSelected(currentCellCoordinates);
    // then
    expect(component.previousSelection).toEqual(currentCellCoordinates);
    expect(component.currentCellCoordinates).toEqual(currentCellCoordinates);
    expect(component.currentTableState[0][0]).toBeNull();
    expect(component.currentTableState[currentCellCoordinates.column][currentCellCoordinates.row]).toEqual(Sign.O);
  });

  it('should not change selection as player choose already selected cell', () => {
    // given
    component.currentPlayer = Sign.O;
    component.previousSelection = {column: 1, row: 1} as CellCoordinates;
    const currentCellCoordinates = {column: 1, row: 1} as CellCoordinates;
    // when
    component.onCellSelected(currentCellCoordinates);
    // then
    expect(component.previousSelection).toEqual(currentCellCoordinates);
    expect(component.currentCellCoordinates).toEqual(currentCellCoordinates);
    expect(component.currentTableState[currentCellCoordinates.column][currentCellCoordinates.row]).toEqual(Sign.O);
  });
});
