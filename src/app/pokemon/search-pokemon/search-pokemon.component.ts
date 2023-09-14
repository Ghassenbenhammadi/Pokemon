import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { Subject, Observable, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
 
})
export class SearchPokemonComponent implements OnInit {
  searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(
    private router:Router,
    private pokemonService: PokemonService){

  }
  ngOnInit(): void {
this.pokemons$ = this.searchTerms.pipe(
  // {..."a"."ab"...."abz"."ab"...."abc"}
  debounceTime(300),
  // {..."ab"...."ab"...."abc"}
  //rxjs pour elimner les recherche qui n'ont pas utile
distinctUntilChanged(),
// {..."ab"......."abc"}
// opérateur qui attend le changement au cour de recherche 
switchMap((term) => this.pokemonService.searchPokemonList(term))  
// {...pokemonsList(ab).......pokemonsList(ab)}
);
  }
 

  search(term: string) {
this.searchTerms.next(term);
  }
  goToDetail(pokemon: Pokemon){
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
