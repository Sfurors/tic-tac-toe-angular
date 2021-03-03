import { Component, Input, OnInit } from '@angular/core';

import { CellCoordinates, GameStateDto, Sign } from './models/game.model';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
})
export class GameComponent implements OnInit {

  @Input() currentCellCoordinates: CellCoordinates;

  currentTableState: Sign[][];
  currentPlayer: Sign;
  previousSelection: CellCoordinates;

  constructor(private readonly gameService: GameService) { }

  ngOnInit(): void {
    this.getTableState();
  }

  onCellSelected(cellCoordinates: CellCoordinates): void {
    this.currentCellCoordinates = cellCoordinates;
    if (this.previousSelection == null) {
      this.previousSelection = cellCoordinates;
    }
    if (this.currentCellCoordinates !== this.previousSelection) {
      this.currentTableState[this.previousSelection.column][this.previousSelection.row] = null;
    }
    this.previousSelection = this.currentCellCoordinates;
    this.currentTableState[cellCoordinates.column][cellCoordinates.row] = this.currentPlayer;
  }

  onSubmit(): void {
    this.gameService.submit(this.currentCellCoordinates)
      .subscribe((val: GameStateDto) => {
        this.getGameState(val);
      });
  }

  getTableState(): void {
    this.gameService.getGameTableState()
      .subscribe((val: GameStateDto) => {
        this.getGameState(val);
      });
  }

  resetTableState(): void {
    this.gameService.resetGameTable()
      .subscribe((val: GameStateDto) => {
        this.getGameState(val);
      });
  }

  private getGameState(val: GameStateDto): void {
    this.currentTableState = val.tableState;
    this.currentPlayer = val.currentPlayer;
    this.previousSelection = null;
    this.currentCellCoordinates = null;
  }
}
