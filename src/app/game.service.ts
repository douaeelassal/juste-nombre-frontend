import { Injectable } from '@angular/core';

interface GameHistory {
  level: string;
  attempts: number;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private targetNumber: number = 0;
  private attempts: number = 0;
  private gameHistory: GameHistory[] = [];

  startNewGame(level: string): void {
    this.attempts = 0;
    let maxNumber: number;

    switch (level) {
      case 'easy':
        maxNumber = 1000;
        break;
      case 'medium':
        maxNumber = 1000000;
        break;
      case 'hard':
        maxNumber = 1000000000;
        break;
      default:
        maxNumber = 1000;
    }

    this.targetNumber = Math.floor(Math.random() * maxNumber);
    console.log(`New game started! Target number: ${this.targetNumber}`);
  }

  checkGuess(guess: number): string {
    this.attempts++;
    if (guess < this.targetNumber) {
      return 'higher';
    } else if (guess > this.targetNumber) {
      return 'lower';
    } else {
      this.gameHistory.push({ level: this.getCurrentLevel(), attempts: this.attempts });
      return 'correct';
    }
  }

  getAttempts(): number {
    return this.attempts;
  }

  getGameHistory(): GameHistory[] {
    return this.gameHistory;
  }

  private getCurrentLevel(): string {
    if (this.targetNumber <= 1000) {
      return 'easy';
    } else if (this.targetNumber <= 1000000) {
      return 'medium';
    } else {
      return 'hard';
    }
  }
}


