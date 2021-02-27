import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CellCoordinates, Sign } from '../models/game.model';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css']
})
export class GameTableComponent implements OnInit {
  @Input() tableState: Sign[][];
  @Output() cellSelected = new EventEmitter<CellCoordinates>();
  readonly ROW_NUMBERS: number[] = [0, 1, 2];
  readonly COLUMN_NUMBERS: number[] = [0, 1, 2];
  currentSelection: CellCoordinates;

  constructor() { }

  ngOnInit() {
  }

  onCellSelected(column: number, row: number) {
    const selectedCell = {column, row} as CellCoordinates;
    //selectedCell !== this.currentSelection : how to handle selection of another cell? (player changed his mind)
    this.currentSelection = selectedCell;
    this.cellSelected.emit(selectedCell);
  }
}
