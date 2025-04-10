import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { GameService } from './game.service';

const routes: Routes = [
  { path: '', component: GameComponent },
  { path: 'scoreboard', component: ScoreboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ScoreboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
