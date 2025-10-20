import '@iconify/iconify/dist/iconify.min.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
