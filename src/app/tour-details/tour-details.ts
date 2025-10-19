import { Component } from '@angular/core';


@Component({
  selector: 'app-tour-details',
  imports: [],
  templateUrl: './tour-details.html',
  styleUrl: './tour-details.scss'
})
export class TourDetails {
  selectedCurrency = 'USD';
  setCurrency(currency: string) {
    this.selectedCurrency = currency;

  }


}
