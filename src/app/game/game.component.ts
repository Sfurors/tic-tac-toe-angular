import { Component, Input, OnInit } from '@angular/core';
import { CellCoordinates, Sign } from './models/game.model';
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

  onSubmit() {
    this.gameService.submit(this.currentCellCoordinates).subscribe();
  }

  getTableState() {
    this.gameService.getGameTableState().subscribe(val =>{
      this.currentTableState = val.tableState;
      this.currentPlayer = val.currentPlayer;
    });
  }

  resetTableState() {
    this.gameService.resetGameTable().subscribe(val => {
        this.currentTableState = val.tableState;
        this.verdict = val.verdict;
    });
  }

}
