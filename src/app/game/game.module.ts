import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameTableComponent } from './game-table/game-table.component';
import { TableCellComponent } from './game-table/table-cell/table-cell.component';
import { GameNavPanelComponent } from './game-nav-panel/game-nav-panel.component';
import { GameComponent } from './game.component';
import { ClickOutsideModule } from 'ng-click-outside';


@NgModule({
  declarations: [
    GameNavPanelComponent,
    GameTableComponent,
    TableCellComponent,
    GameComponent,
  ],
  imports: [
    CommonModule,
    ClickOutsideModule
  ],
  exports: [
    GameComponent
  ]
})
export class GameModule { }
