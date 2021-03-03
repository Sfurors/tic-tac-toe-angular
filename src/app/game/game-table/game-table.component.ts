import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CellCoordinates, Sign } from '../models/game.model';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css']
})
export class GameTableComponent {

  @Input() tableState: Sign[][];
  @Input() currentPlayer: Sign;
  @Input() currentSelection: CellCoordinates;

  @Output() cellSelected = new EventEmitter<CellCoordinates>();

  readonly ROW_NUMBERS: number[] = [0, 1, 2];
  readonly COLUMN_NUMBERS: number[] = [0, 1, 2];

  onCellSelected(column: number, row: number): void {
    const selectedCell = { column, row } as CellCoordinates;

    if (!this.tableState[column][row]) {
      this.currentSelection = selectedCell;
      this.cellSelected.emit(selectedCell);
    }
  }

  isCellSelected(column: number, row: number): boolean {
    return this.currentSelection?.column === column
      && this.currentSelection?.row === row;
  }
}
