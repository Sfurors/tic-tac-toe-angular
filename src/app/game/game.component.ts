import { Component, Input, OnInit } from '@angular/core';
import { CellCoordinates } from './models/game.model';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() currentCellCoordinates: CellCoordinates;
  constructor(private readonly gameService: GameService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.gameService.submit(this.currentCellCoordinates).subscribe();
  }

}
