import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from './pokemon.entity';
import { BattleResult } from './battleResult.entity';

@Injectable()
export class PokemonService implements OnModuleInit {
  constructor(
    @InjectRepository(Pokemon)
    private pokemonRepository: Repository<Pokemon>,
    @InjectRepository(BattleResult)
    private battleResultRepository: Repository<BattleResult>,
  ) {}

  async onModuleInit() {
    try {
      const count = await this.pokemonRepository.count(); // trae la cantidad de pokemones
      if (count === 0) {
        const pokemonData = [
          {
            id: 'pokemon-1',
            name: 'Pikachu',
            attack: 4,
            defense: 3,
            hp: 3,
            speed: 6,
            type: 'Type',
            imageUrl:
              'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png',
          },
          {
            id: 'pokemon-2',
            name: 'Charmander',
            attack: 4,
            defense: 3,
            hp: 3,
            speed: 4,
            type: 'Type',
            imageUrl:
              'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png',
          },
          {
            id: 'pokemon-3',
            name: 'Squirtle',
            attack: 3,
            defense: 4,
            hp: 3,
            speed: 3,
            type: 'Type',
            imageUrl:
              'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png',
          },
          {
            id: 'pokemon-4',
            name: 'Bulbasur',
            attack: 4,
            defense: 3,
            hp: 3,
            speed: 3,
            type: 'Type',
            imageUrl:
              'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png',
          },
          {
            id: 'pokemon-5',
            name: 'Eevee',
            attack: 4,
            defense: 3,
            hp: 4,
            speed: 5,
            type: 'Type',
            imageUrl:
              'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png',
          },
        ];
        await this.pokemonRepository.save(pokemonData);
      }
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
  async findAll(): Promise<Pokemon[]> {
    try {
      return this.pokemonRepository.find();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
  async battle(
    pokemon1Id: string,
    pokemon2Id: string,
  ): Promise<{ winner: Pokemon; loser: Pokemon }> {
    try {
      const pokemon1 = await this.pokemonRepository.findOne({
        where: { id: pokemon1Id },
      });
      const pokemon2 = await this.pokemonRepository.findOne({
        where: { id: pokemon2Id },
      });
      if (!pokemon1 || !pokemon2) {
        throw new NotFoundException('One or both Pokémon not found');
      }
      let attacker = pokemon1.speed > pokemon2.speed ? pokemon1 : pokemon2;
      let defender = attacker === pokemon1 ? pokemon2 : pokemon1;

      if (pokemon1.speed === pokemon2.speed) {
        attacker = pokemon1.attack > pokemon2.attack ? pokemon1 : pokemon2;
        defender = attacker === pokemon1 ? pokemon2 : pokemon1;
      }
      while (pokemon1.hp > 0 && pokemon2.hp > 0) {
        const damage = Math.max(attacker.attack - defender.defense, 1);
        defender.hp -= damage;

        if (defender.hp <= 0) break;

        // Cambio de roles
        [attacker, defender] = [defender, attacker];
      }
      const winner = pokemon1.hp > 0 ? pokemon1 : pokemon2;
      const loser = winner === pokemon1 ? pokemon2 : pokemon1;
      const date = new Date();
      //Guardar el resultado de la batalla en la base de datos
      await this.saveBattleResult(winner.name, loser.name, date.toString());
      return { winner, loser };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(error);
    }
  }
  async saveBattleResult(
    winner: string,
    loser: string,
    date: string,
  ): Promise<void> {
    try {
      const battleResult = this.battleResultRepository.create({
        winner,
        loser,
        date,
      });
      const result = await this.battleResultRepository.save(battleResult);
      console.log(result);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async getBattleResults(): Promise<BattleResult[]> {
    try {
      console.log('entre a getBattleResults');
      const result = await this.battleResultRepository.find();
      console.log(result);
      return result; // Obtener todos los resultados de la batalla en la base de datos
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
