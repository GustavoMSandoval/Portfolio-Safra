import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Start } from './start/start';
import { About } from './about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Start, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('site-portfolio-safra');
}
