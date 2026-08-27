import { Component, signal } from '@angular/core';
import { AppLayout } from './core/layout/app-layout/app-layout';
// component permet de declarer une classe comme composant angular
// signal ets un mecanisme permettant de stocker un état réactif.

@Component({
  selector: 'app-root',
  imports: [AppLayout],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

// le decorateur @Component donne a Angular les infos nécesaire pour comprendre comment utiliser ta classe App

export class App {
  
}

