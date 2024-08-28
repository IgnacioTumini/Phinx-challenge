import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { Pokemon } from './pokemon.entity';
import { BattleResult } from './battleResult.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon, BattleResult])],
  providers: [PokemonService],
  controllers: [PokemonController],
})
export class PokemonModule {}
