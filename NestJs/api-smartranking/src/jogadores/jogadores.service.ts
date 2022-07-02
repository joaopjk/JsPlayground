import { Injectable, Logger } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class JogadoresService {
  private readonly logger = new Logger(JogadoresService.name);
  private jogadores: Jogador[] = [];

  async criarAtualizarJogador(criarJogadorDto: CriarJogadorDto): Promise<void> {
    this.logger.log(`criarJogadorDto: ${criarJogadorDto}`);
    this.criar(criarJogadorDto);
  }

  private criar(criarJogadorDto: CriarJogadorDto): void {
    const { nome, telefoneCelular, email } = criarJogadorDto;
    const jogador: Jogador = {
      _id: uuid,
      nome,
      telefoneCelular,
      email,
      ranking: 'A',
      posicaoRaking: 1,
      urlFotoJogador: ''
    };
    this.jogadores.push(jogador);
  }
}
