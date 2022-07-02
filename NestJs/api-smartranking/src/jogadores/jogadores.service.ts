import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';

@Injectable()
export class JogadoresService {
  private readonly logger = new Logger(JogadoresService.name);
  private jogadores: any[] = [];

  async consultarJogadores(): Promise<Jogador[]> {
    return this.jogadores;
  }

  async consultarJogadorPeloEmail(email: string): Promise<Jogador> {
    const jogadorEncontrado = this.jogadores.find((x) => x.email === email);
    if (!jogadorEncontrado)
      throw new NotFoundException(
        `Jogandor com o email ${email} não foi encontrado!`
      );
    return jogadorEncontrado;
  }

  async criarAtualizarJogador(criarJogadorDto: CriarJogadorDto): Promise<void> {
    const { email } = criarJogadorDto;

    const jogadorEncontrato = this.jogadores.find((x) => x.email === email);
    if (jogadorEncontrato) this.atualizar(jogadorEncontrato, criarJogadorDto);
    else this.criar(criarJogadorDto);
  }

  async removerJogador(email: string): Promise<void> {
    const jogadorEncontrado = this.jogadores.find((x) => x.email === email);
    if (!jogadorEncontrado)
      throw new NotFoundException(
        `Jogandor com o email ${email} não foi encontrado!`
      );
    this.jogadores = this.jogadores.filter((x) => x.email !== email);
  }

  private criar(criarJogadorDto: CriarJogadorDto): void {
    const { nome, telefoneCelular, email } = criarJogadorDto;
    const jogador = {
      nome,
      telefoneCelular,
      email,
      ranking: 'A',
      posicaoRanking: 1,
      urlFotoJogador: ''
    };
    this.jogadores.push(jogador);
  }

  private atualizar(
    jogadorEncontrado: Jogador,
    criarJogadorDto: CriarJogadorDto
  ): void {
    const { nome } = criarJogadorDto;
    jogadorEncontrado.nome = nome;
  }
}
