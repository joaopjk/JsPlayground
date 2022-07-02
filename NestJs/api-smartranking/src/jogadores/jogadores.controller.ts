import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { JogadoresService } from './jogadores.service';
import { JogadoresValidacaoParametrosPipe } from './pipes/jogadores-validacao-parametros.pipe';

@Controller('api/v1/jogadores')
export class JogadoresController {
  constructor(private jogadoresService: JogadoresService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async criarAtualizarJogador(@Body() criarJogadorDto: CriarJogadorDto) {
    await this.jogadoresService.criarAtualizarJogador(criarJogadorDto);
  }

  @Get()
  async consultarJogadores(
    @Query('email') email: string
  ): Promise<Jogador | Jogador[]> {
    if (email) return this.jogadoresService.consultarJogadorPeloEmail(email);
    else return this.jogadoresService.consultarJogadores();
  }

  @Delete()
  async removerJogador(
    @Query('email', JogadoresValidacaoParametrosPipe) email: string
  ): Promise<void> {
    return this.jogadoresService.removerJogador(email);
  }
}
