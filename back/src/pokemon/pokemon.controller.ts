import { Body, Controller, Get, Post } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.entity';
import { BattleResult } from './battleResult.entity';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get('history')
  async getBattleResults(): Promise<BattleResult[]> {
    console.log('entre al controller');
    return await this.pokemonService.getBattleResults();
  }

  @Get()
  async findAll(): Promise<Pokemon[]> {
    return await this.pokemonService.findAll();
  }

  @Post('battle')
  async battle(@Body() battleDto: { pokemon1Id: string; pokemon2Id: string }) {
    return this.pokemonService.battle(
      battleDto.pokemon1Id,
      battleDto.pokemon2Id,
    );
  }
}
