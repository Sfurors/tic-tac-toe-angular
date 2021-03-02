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

  constructor(private readonly gameService: GameService) { }

  ngOnInit(): void {
    this.getTableState();
  }

  onCellSelected(cellCoordinates: CellCoordinates): void {
    this.currentCellCoordinates = cellCoordinates;
  }

  onSubmit(): void {
    this.gameService.submit(this.currentCellCoordinates)
      .subscribe((val: GameStateDto) => {
        this.getGameState(val);
      });
    this.currentCellCoordinates = null;
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
    this.currentCellCoordinates = null;
  }

  private getGameState(val: GameStateDto): void {
    this.currentTableState = val.tableState;
    this.currentPlayer = val.currentPlayer;
  }
}
