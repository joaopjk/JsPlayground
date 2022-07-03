import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';

@Injectable()
export class JogadoresService {
  private readonly logger = new Logger(JogadoresService.name);
  constructor(
    @InjectModel('Jogador') private readonly jogadorModel: Model<Jogador>
  ) {}

  async consultarJogadores(): Promise<Jogador[]> {
    return await this.jogadorModel.find().exec();
  }

  async consultarJogadorPeloId(_id: string): Promise<Jogador> {
    const jogadorEncontrado = await this.jogadorModel.findOne({ _id }).exec();
    console.log(jogadorEncontrado);
    if (!jogadorEncontrado)
      throw new NotFoundException(
        `Jogandor com o id ${_id} não foi encontrado!`
      );

    return jogadorEncontrado;
  }

  async criarJogador(criarJogadorDto: CriarJogadorDto): Promise<Jogador> {
    const { email } = criarJogadorDto;

    const jogadorEncontrato = await this.jogadorModel.findOne({ email }).exec();

    if (jogadorEncontrato) {
      throw new BadRequestException(
        `Jogador com o email ${email} já cadastrado!`
      );
    }

    const jogadorCriado = new this.jogadorModel(criarJogadorDto);
    return await jogadorCriado.save();
  }

  async atualizarJogador(
    _id: string,
    criarJogadorDto: CriarJogadorDto
  ): Promise<void> {
    const jogadorEncontrato = await this.jogadorModel.findOne({ _id }).exec();

    if (!jogadorEncontrato)
      throw new NotFoundException(
        `O jogador com o id: ${_id} não foi encontrado`
      );

    this.jogadorModel
      .findOneAndUpdate(
        { email: criarJogadorDto.email },
        { $set: criarJogadorDto }
      )
      .exec();
  }

  async removerJogador(_id: string): Promise<any> {
    const jogadorEncontrado = this.jogadorModel.findOne({ _id }).exec();

    if (!jogadorEncontrado)
      throw new NotFoundException(
        `Jogandor com o id ${_id} não foi encontrado!`
      );

    return await this.jogadorModel.deleteOne({ _id }).exec();
  }
}
