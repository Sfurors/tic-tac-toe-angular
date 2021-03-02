import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ClickOutsideModule } from 'ng-click-outside';
import { GameComponent } from './game.component';
import { GameTableComponent } from './game-table/game-table.component';
import { TableCellComponent } from './game-table/table-cell/table-cell.component';
import { GameNavPanelComponent } from './game-nav-panel/game-nav-panel.component';

@NgModule({
  declarations: [
    GameNavPanelComponent,
    GameTableComponent,
    TableCellComponent,
    GameComponent,
  ],
  imports: [
    CommonModule,
    ClickOutsideModule,
    MatSnackBarModule,
  ],
  exports: [
    GameComponent
  ]
})
export class GameModule { }
