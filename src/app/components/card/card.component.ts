import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon:PokemonData

  constructor(
    private service: PokemonService
  ) {

    this.pokemon = {
      id: 0,
      name: '',
      sprites: {
        front_default: ''
      },
      types: []
    }

   }

  ngOnInit(): void {
    this.getPokemon('pikachu')
  }

  getPokemon(searchName: string){
    this.service.getPokemon(searchName).subscribe(
      {
        next: (resp) => {

        this.pokemon = {
          id: resp.id,
          name: resp.name,
          sprites: resp.sprites,
          types: resp.types
        }
      },
      error: (err) => console.log('Not found')
    })
  }
}
