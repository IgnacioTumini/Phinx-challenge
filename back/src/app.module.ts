import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonModule } from './pokemon/pokemon.module';
import dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.TYPE_DATA_BASE as
        | 'mysql'
        | 'postgres'
        | 'sqlite'
        | 'mongodb',
      database: process.env.DATA_BASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      synchronize: true,
      dropSchema: true,
      logging: false,
    }),
    PokemonModule,
  ],
})
export class AppModule {}
