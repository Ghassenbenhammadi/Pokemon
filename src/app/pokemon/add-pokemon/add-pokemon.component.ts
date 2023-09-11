import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-add-pokemon',
  template: `
    <h2 class="center">
      Ajout un nouveau pokemon
      <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
    </h2>
  `
})
export class AddPokemonComponent  implements OnInit {
 


  pokemon: Pokemon;
  ngOnInit(){
    this.pokemon =  new Pokemon();
  }
}
