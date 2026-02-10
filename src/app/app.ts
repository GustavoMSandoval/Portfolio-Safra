import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Start } from './start/start';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Start],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('site-portfolio-safra');
}
