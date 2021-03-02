import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Sign } from '../../models/game.model';

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.css']
})
export class TableCellComponent {

  @Input() sign: Sign;

  @Output() cellSelected = new EventEmitter<void>();

  onCellSelected(): void {
    this.cellSelected.emit();
  }
}
