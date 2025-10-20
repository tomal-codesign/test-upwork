import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TourDetails } from './tour-details/tour-details';
import { Header } from './header/header';
import { RelatedTour } from './related-tour/related-tour';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TourDetails, Header, RelatedTour],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('test-upwork');
}
