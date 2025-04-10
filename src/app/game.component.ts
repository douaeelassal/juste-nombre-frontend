import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  guess: number = 0;
  message: string = '';
  level: string = 'easy';

  constructor(private gameService: GameService) {}

  startGame(): void {
    this.gameService.startNewGame(this.level);
    this.message = 'Guess the number!';
    this.guess = 0;
  }

  makeGuess(): void {
    const result = this.gameService.checkGuess(this.guess);
    if (result === 'correct') {
      this.message = `Congratulations! You found the number in ${this.gameService.getAttempts()} attempts.`;
    } else if (result === 'higher') {
      this.message = 'Try a higher number.';
    } else {
      this.message = 'Try a lower number.';
    }
  }
}
