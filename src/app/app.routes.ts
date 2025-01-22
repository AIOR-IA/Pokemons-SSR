import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about/about-page.component';
import { PricingPageComponent } from './pages/pricing/pricing-page.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';

export const routes: Routes = [
  {
    path:'about',
    component: AboutPageComponent,
  },
  {
    path:'price',
    component: PricingPageComponent,
  },
  {
    path:'contact',
    component: ContactPageComponent,
  },
  {
    path: '**',
    redirectTo: 'about',
  }

];
