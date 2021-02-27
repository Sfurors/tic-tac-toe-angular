import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-nav-panel',
  templateUrl: './game-nav-panel.component.html',
  styleUrls: ['./game-nav-panel.component.scss']
})
export class GameNavPanelComponent implements OnInit {
  @Output() resetTriggered = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onResetGameTableState() {
    this.resetTriggered.emit();
  }

}
