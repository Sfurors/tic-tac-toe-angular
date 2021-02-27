import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sign } from '../../models/game.model';

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.scss']
})
export class TableCellComponent implements OnInit {
  @Input() cellSelectionReset: boolean;
  @Input() sign: Sign;
  @Output() cellSelected = new EventEmitter<boolean>();
  isCellSelected: boolean;

  constructor() { }

  ngOnInit() {
  }

  onCellSelected(): void {
    this.isCellSelected = !this.isCellSelected;
    this.cellSelected.emit(this.isCellSelected);
  }
}
