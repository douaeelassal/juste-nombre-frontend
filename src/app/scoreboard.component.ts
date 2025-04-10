import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent {
  constructor(private gameService: GameService) {}

  getGameHistory() {
    return this.gameService.getGameHistory();
  }
}
