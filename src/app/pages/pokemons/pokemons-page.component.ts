import { ApplicationRef, ChangeDetectionStrategy, Component, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { PokemonsListComponent } from "../../pokemons/components/pokemons-list/pokemons-list.component";
import { PokemonListSkeletonComponent } from "./ui/pokemon-list-skeleton/pokemon-list-skeleton.component";
import { PokemonsService } from '../../pokemons/services/pokemons.service';
import { SimplePokemon } from '../../pokemons/interfaces';
import { routes } from '../../app.routes';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop'
import { map, tap } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemons-page',
  standalone: true,
  imports: [PokemonsListComponent, PokemonListSkeletonComponent, RouterLink],
  templateUrl: './pokemons-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPageComponent implements OnDestroy {
  public isLoading = signal(true);
  private appRef = inject(ApplicationRef);
  public pokemosList = signal<SimplePokemon[]>([]);
  private readonly pokemonService = inject(PokemonsService);
  private router = inject(ActivatedRoute);
  private rout = inject(Router);
  public title = inject(Title);
  public currentPage = toSignal<number>(
    this.router.params.pipe(
      map(page => page['page'] ?? '1'),
      map(page => isNaN(+page) ? 1 : +page),
      map(page => Math.max(1, page)),
    )
  );

  public loadOnPageChanged = effect(() => {
    console.log('Page changed', this.currentPage());
    this.loadPokemons(this.currentPage())
  }, { allowSignalWrites: true })
  // private $appState = this.appRef.isStable.subscribe((isStable) => {
  //   console.log(isStable);
  // });

  // public ngOnInit(): void {
  // this.loadPokemons();
  // setTimeout(() => {
  //   this.isLoading.set(false);
  // }, 5000);
  // this.router.queryParams.subscribe(params => {
  //   console.log(params);
  // })
  // }

  loadPokemons(page: number = 0) {
    // const pageToLoad = this.currentPage()! + page;
    this.pokemonService.loadPage(page)
      .pipe(
        // tap(() => this.rout.navigate([], { queryParams: { page: pageToLoad } })),
        tap(() => this.title.setTitle(`List of Pokemons - Page ${page}`))
      )
      .subscribe(pokemons => {
        this.pokemosList.set(pokemons);


      })
  }

  public ngOnDestroy(): void {
    // this.$appState.unsubscribe();
  }
}
