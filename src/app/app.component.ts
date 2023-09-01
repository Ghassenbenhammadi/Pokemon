import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  
})
export class AppComponent implements OnInit {
  pokemons: Pokemon[] =  POKEMONS;
constructor(){

}
ngOnInit(): void {
  console.table(this.pokemons);
  
}
selectPokemon(event: MouseEvent) {
  const index: number = +(event.target  as HTMLInputElement).value;
 // ajouter +pour transformation string to number
  console.log(`Vous avez cliqué sur le pokémon ${this.pokemons[index].name}`);
  
}
}
