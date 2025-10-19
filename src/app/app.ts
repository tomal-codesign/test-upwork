import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TourDetails } from './tour-details/tour-details';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TourDetails],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('test-upwork');
}
