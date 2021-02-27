import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameTableComponent } from './game-table/game-table.component';
import { TableCellComponent } from './game-table/table-cell/table-cell.component';
import { GameNavPanelComponent } from './game-nav-panel/game-nav-panel.component';
import { AppModule } from '../app.module';
import { GameComponent } from './game.component';


@NgModule({
  declarations: [
    GameNavPanelComponent,
    GameTableComponent,
    TableCellComponent,
    GameComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    GameComponent
  ]
})
export class GameModule { }
