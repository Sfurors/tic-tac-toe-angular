import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CellCoordinates, Sign } from '../models/game.model';

import { GameTableComponent } from './game-table.component';

describe('GameTableComponent', () => {
  let component: GameTableComponent;
  let fixture: ComponentFixture<GameTableComponent>;
  let tableState;

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
    component.currentSelection = {column: 1, row: 1} as CellCoordinates;
    let result = component.isCellSelected(1, 1);
    expect(result).toBe(true);
  });

});
