import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoriasService } from 'src/categorias/categorias.service';
import { JogadoresService } from 'src/jogadores/jogadores.service';
import { CriarDesafioDto } from './dtos/criar-desafio.dto';
import { Desafio, Partida } from './interfaces/desafio.interface';

@Injectable()
export class DesafiosService {
  constructor(
    @InjectModel('Desafio') private readonly desafioModel: Model<Desafio>,
    @InjectModel('Partida') private readonly partidaModel: Model<Partida>,
    private readonly jogadoresService: JogadoresService,
    private readonly categoriasService: CategoriasService
  ) {}

  async criarDesafio(criarDesafioDto: CriarDesafioDto): Promise<void> {
    const jogadores = await this.jogadoresService.consultarJogadores();
    criarDesafioDto.jogadores.map((x) => {
      const jogadorFilter = jogadores.filter((j) => j._id === x._id);

      if (jogadorFilter.length === 0)
        throw new BadRequestException(`O id ${x._id} não é um jogador!`);
    });

    const solicitanteEhJogadorDaPartida =
      await criarDesafioDto.jogadores.filter((x) => {
        x._id === criarDesafioDto.solicitante;
      });
    if (solicitanteEhJogadorDaPartida.length == 0) {
      throw new BadRequestException(
        `O solicitante deve ser um jogador da partida!`
      );
    }
  }
}
