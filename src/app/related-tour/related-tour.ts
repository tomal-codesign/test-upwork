import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Swiper from 'swiper/bundle';

@Component({
  selector: 'app-related-tour',
  imports: [],
  templateUrl: './related-tour.html',
  styleUrl: './related-tour.scss'
})
export class RelatedTour implements AfterViewInit {
  @ViewChild('swiperContainer', { static: false }) swiperRef!: ElementRef;
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
