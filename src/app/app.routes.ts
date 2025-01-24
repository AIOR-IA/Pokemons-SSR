import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about/about-page.component';
import { PricingPageComponent } from './pages/pricing/pricing-page.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';
import { PokemonsPageComponent } from './pages/pokemons/pokemons-page.component';

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
    path:'pokemons',
    component: PokemonsPageComponent,
  },
  {
    path:'pokemons/:id',
    loadComponent:() => import('./pages/pokemon-page/pokemon-page.component'),
  },
  {
    path: '**',
    redirectTo: 'about',
  }

];
