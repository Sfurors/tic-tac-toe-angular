import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CellCoordinates, Sign } from '../models/game.model';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.scss']
})
export class GameTableComponent implements OnInit {
  @Input() tableState: Sign[][];
  @Input() currentPlayer: Sign;
  @Input() currentSelection: CellCoordinates;
  @Output() cellSelected = new EventEmitter<CellCoordinates>();
  readonly ROW_NUMBERS: number[] = [0, 1, 2];
  readonly COLUMN_NUMBERS: number[] = [0, 1, 2];

  constructor() { }

  ngOnInit() {
  }

  onCellSelected(column: number, row: number) {
    const selectedCell = {column, row} as CellCoordinates;
    if (this.tableState[column][row]) {
      //handling message prompt?
    } else {
      this.currentSelection = selectedCell;
      this.cellSelected.emit(selectedCell);
    }
  }

  isCellSelected(column: number, row: number): boolean {
    return !this.tableState[column][row]
      && this.currentSelection?.column === column
      && this.currentSelection?.row === row;
  }

  validateMove(potentialMoveCoordinates: CellCoordinates): boolean {
    return !this.tableState[potentialMoveCoordinates.row][potentialMoveCoordinates.column];
  }

}
