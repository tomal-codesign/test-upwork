import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
// import Swiper, { Navigation, Pagination } from 'swiper';
// import Navigation from 'swiper/modules/navigation/navigation.js';
// import Pagination from 'swiper/modules/pagination/pagination.js';
import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


@Component({
  selector: 'app-tour-details',
  imports: [],
  templateUrl: './tour-details.html',
  styleUrl: './tour-details.scss'
})
export class TourDetails implements AfterViewInit {
  @ViewChild('swiperContainer', { static: false }) swiperRef!: ElementRef;
  selectedCurrency = 'USD';
  setCurrency(currency: string) {
    this.selectedCurrency = currency;

  }

  ngAfterViewInit() {
    new Swiper(this.swiperRef.nativeElement, {
      // modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      // navigation: {
      //   nextEl: '.swiper-button-next-custom',
      //   prevEl: '.swiper-button-prev-custom',
      // },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 2, spaceBetween: 15 },
        1024: { slidesPerView: 4, spaceBetween: 20 }
      }
    });
  }
}
