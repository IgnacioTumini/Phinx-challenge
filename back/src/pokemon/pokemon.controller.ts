import { Body, Controller, Get, Post } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.entity';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  async findAll(): Promise<Pokemon[]> {
    return this.pokemonService.findAll();
  }
  @Post('battle')
  async battle(@Body() battleDto: { pokemon1Id: string; pokemon2Id: string }) {
    return this.pokemonService.battle(
      battleDto.pokemon1Id,
      battleDto.pokemon2Id,
    );
  }
}
