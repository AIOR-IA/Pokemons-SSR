import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";
import { SimplePokemon } from '../../interfaces';

@Component({
  selector: 'pokemons-list',
  standalone: true,
  imports: [PokemonCardComponent],
  templateUrl: './pokemons-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonsListComponent {
  public pokemonsList = input.required<SimplePokemon[]>();
}
