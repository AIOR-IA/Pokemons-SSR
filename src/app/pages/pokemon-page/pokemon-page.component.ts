import { ChangeDetectionStrategy, Component, signal, OnInit, inject } from '@angular/core';
import { Pokemon } from '../../pokemons/interfaces';
import { PokemonsService } from '../../pokemons/services/pokemons.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemon-page',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonPageComponent implements OnInit {

  public route = inject(ActivatedRoute);
  public pokemon = signal<Pokemon | null>(null);
  private title = inject(Title);
  private metaTags = inject(Meta);

  private readonly pokemonService = inject(PokemonsService);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.pokemonService.getPokemons(id)
      .pipe(
        tap(({ id, name }) => {
          const pageTitle = `Pokemon ${id} ${name}`;
          const pageDescription = `Page Pokemon ${name}`;
          this.title.setTitle(pageTitle);

          this.metaTags.updateTag({ name: 'description', content: pageDescription });
          this.metaTags.updateTag({ property: 'og:title', content: pageTitle });
          this.metaTags.updateTag({ property: 'og:description', content: pageDescription });
          this.metaTags.updateTag({ property: 'og:image', content: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png` });
        })
      )
      .subscribe(pokemon => {
        this.pokemon.set(pokemon);
      })
  }

}
