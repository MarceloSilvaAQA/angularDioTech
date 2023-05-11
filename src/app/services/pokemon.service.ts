import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL: string = ""

  constructor() {
    this.baseURL = environment.pokeApi
   }

  getPokemon(pokemonName:string){
    console.log(this.baseURL)

  }
}
