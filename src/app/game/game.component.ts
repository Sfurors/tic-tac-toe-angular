import { Component, Input, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { CellCoordinates, GameStateDto, Sign } from './models/game.model';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() currentCellCoordinates: CellCoordinates;
  currentTableState: Sign[][];
  verdict: string;
  currentPlayer: Sign;

  constructor(private readonly gameService: GameService) { }

  ngOnInit() {
    this.getTableState();
  }

  onCellSelected(cellCoordinates: CellCoordinates) {
    this.currentCellCoordinates = cellCoordinates;
  }

  onSubmit() {
    this.gameService.submit(this.currentCellCoordinates).subscribe((val: GameStateDto) => {
      this.getGameState(val);
    });
    this.currentCellCoordinates = null;
  }

  getTableState(): void {
    this.gameService.getGameTableState().subscribe((val: GameStateDto) => {
      this.getGameState(val);
    });
  }

  resetTableState(): void {
    this.gameService.resetGameTable().subscribe((val: GameStateDto) => {
      this.getGameState(val);
    });
    this.currentCellCoordinates = null;
  }

  private getGameState(val: GameStateDto): void {
    this.currentTableState = val.tableState;
    this.currentPlayer = val.currentPlayer;
    this.verdict = val.verdict;
  }

}
