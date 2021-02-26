import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CellCoordinates } from '../models/game.model';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css']
})
export class GameTableComponent implements OnInit {
  @Output() cellSelected = new EventEmitter<CellCoordinates>();
  readonly ROW_NUMBERS: number[] = [1, 2, 3];
  readonly COLUMN_NUMBERS: number[] = [1, 2, 3];

  constructor() { }

  ngOnInit() {
  }

  onCellSelected(column: number, row: number) {
    const selectedCell = {column, row} as CellCoordinates;
    this.cellSelected.emit(selectedCell);
  }
}