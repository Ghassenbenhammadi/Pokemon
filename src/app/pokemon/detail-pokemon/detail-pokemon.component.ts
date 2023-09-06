import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit {
 constructor(
  private route: ActivatedRoute,
  private router :Router,
  private pokemonService: PokemonService){}
 pokemons: Pokemon[];
 pokemon:Pokemon|undefined;
 
 ngOnInit() {
  const pokemonId:string|null = this.route.snapshot.paramMap.get('id');
  if(pokemonId) {
    this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
  } else {
    this.pokemon = undefined;
  }
}
goBack(){
  this.router.navigate(['/pokemons']);
}
}
