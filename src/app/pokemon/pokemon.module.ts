import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

const pokemonroutes: Routes = [
  {path:'edit/pokemon/:id', component:EditPokemonComponent },
  {path:'pokemons', component:ListPokemonComponent},
  {path:'pokemon/:id', component:DetailPokemonComponent}
];

@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonFormComponent,
    EditPokemonComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonroutes)
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
