import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CellCoordinates, Sign } from '../models/game.model';

import { GameTableComponent } from './game-table.component';

describe('GameTableComponent', () => {
  let component: GameTableComponent;
  let fixture: ComponentFixture<GameTableComponent>;
  let tableState: Sign[][];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameTableComponent ]
    })
    .compileComponents();
    tableState = [
      [null, null, null], [null, null, null], [null, null, null]
    ];
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTableComponent);
    component = fixture.componentInstance;
    component.tableState = tableState;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true as cell is selected', () => {
    // given
    component.currentSelection = {column: 1, row: 1} as CellCoordinates;
    // when
    const result = component.isCellSelected(1, 1);
    // then
    expect(result).toBe(true);
  });

  it('should return false as cell is not selected', () => {
    // given
    component.currentSelection = {column: 1, row: 1} as CellCoordinates;
    // when
    const result = component.isCellSelected(2, 2);
    // then
    expect(result).toBe(false);
  });

  it('should change current selection coordinates', () => {
    // given
    component.currentSelection = {} as CellCoordinates;
    // when
    component.onCellSelected(1, 1);
    // then
    expect(component.currentSelection).toEqual({column: 1, row: 1} as CellCoordinates);
  });

  it('should not change current selection coordinates', () => {
    // given
    component.currentSelection = {} as CellCoordinates;
    tableState[1][1] = Sign.O;
    // when
    component.onCellSelected(1, 1);
    // then
    expect(component.currentSelection).toEqual({} as CellCoordinates);
  });
});
