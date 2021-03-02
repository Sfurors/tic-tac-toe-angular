import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-nav-panel',
  templateUrl: './game-nav-panel.component.html',
  styleUrls: ['./game-nav-panel.component.css']
})
export class GameNavPanelComponent {

  @Output() resetTriggered = new EventEmitter<void>();
  @Output() submitTriggered = new EventEmitter<void>();

  onResetGameTableState(): void {
    this.resetTriggered.emit();
  }

  onSubmitPlayerMove(): void {
    this.submitTriggered.emit();
  }
}
