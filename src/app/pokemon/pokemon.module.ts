import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { BorderCardDirective } from './border-card.directive';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';

const pokemonroutes: Routes = [
  {path:'pokemons', component:ListPokemonComponent},
  {path:'pokemon/:id', component:DetailPokemonComponent}
];

@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonroutes)
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
