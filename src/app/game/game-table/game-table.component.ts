import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';
import { CellCoordinates, Sign } from '../models/game.model';
import { TableCellComponent } from './table-cell/table-cell.component';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.scss']
})
export class GameTableComponent implements OnInit {
  @Input() tableState: Sign[][];
  @Input() currentPlayer: Sign;
  @Output() cellSelected = new EventEmitter<CellCoordinates>();
  readonly ROW_NUMBERS: number[] = [0, 1, 2];
  readonly COLUMN_NUMBERS: number[] = [0, 1, 2];
  currentSelection: CellCoordinates;

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
    return !this.tableState[column][row] && this.currentSelection?.column === column && this.currentSelection?.row === row;
  }

  validateMove(potentialMoveCoordinates: CellCoordinates): boolean {
    let column = potentialMoveCoordinates.column;
    let row = potentialMoveCoordinates.row;
    if (this.tableState[row][column]) {
      return false;
    }
    return true;
  }

}
