import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',

})
export class ListPokemonComponent implements OnInit  {

  pokemons: Pokemon[];
  constructor(
    private router:Router,
    private pokemonService:PokemonService){}
  ngOnInit(){
     this.pokemonService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);
  }
  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id])
  }
}
