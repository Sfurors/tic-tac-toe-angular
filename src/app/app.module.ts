import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameTableComponent } from './game/game-table/game-table.component';
import { TableCellComponent } from './game/table-cell/table-cell.component';
import { GameNavPanelComponent } from './game/game-nav-panel/game-nav-panel.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    GameTableComponent,
    TableCellComponent,
    GameNavPanelComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
