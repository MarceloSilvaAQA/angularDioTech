import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { PokemonData } from '../models/pokemonData';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL: string = ""
  private pokeData: PokemonData | any

  constructor(
    private http: HttpClient) {
    this.baseURL = environment.pokeApi
   }

  getPokemon(pokemonName:string): Observable<PokemonData>{
   this.pokeData =  this.http.get<PokemonData>(`${this.baseURL}${pokemonName}`)
   return this.pokeData;
  }
}

