import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit {
 constructor(private route: ActivatedRoute){}
 pokemons: Pokemon[];
 pokemon:Pokemon|undefined;
 
 ngOnInit() {
  this.pokemons = POKEMONS;
  const pokemonId:string|null = this.route.snapshot.paramMap.get('id');
  if(pokemonId) {
    this.pokemon = this.pokemons.find(pokemon => pokemon.id == +pokemonId)
  } else {
    this.pokemon = undefined;
  }
  
}
}
