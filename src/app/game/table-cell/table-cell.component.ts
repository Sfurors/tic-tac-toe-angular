import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.css']
})
export class TableCellComponent implements OnInit {
  @Input() cellNumber: number;
  @Output() cellSelected = new EventEmitter<boolean>();
  isCellSelected: boolean;
  //TODO ENUM for signs in model.ts
  sign: string;

  constructor() { }

  ngOnInit() {
  }

  onCellSelected(): void {
    this.isCellSelected = !this.isCellSelected;
    this.cellSelected.emit(this.isCellSelected);
  }
}
