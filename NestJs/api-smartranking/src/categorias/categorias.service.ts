import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JogadoresService } from 'src/jogadores/jogadores.service';
import { AtualizarCategoriaDto } from './dtos/atualizar-categoria.dto';
import { CriaCategoriaDto } from './dtos/criar-categoria.dto';
import { Categoria } from './intefaces/categoria.interface';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectModel('Categoria') private readonly categoriaModel: Model<Categoria>,
    private readonly jogadoresService: JogadoresService
  ) {}

  async consultarTodasCategorias(): Promise<Categoria[]> {
    return await this.categoriaModel.find().populate('jogadores').exec();
  }

  async consultarCategoriaPeloId(categoria: string): Promise<Categoria> {
    const categoriaEncontrada = await this.categoriaModel
      .findOne({ categoria })
      .exec();

    if (!categoriaEncontrada)
      throw new NotFoundException(`Categora: ${categoria} não encontrada!`);

    return categoriaEncontrada;
  }

  async criarCategoria(
    criarCategoriaDto: CriaCategoriaDto
  ): Promise<Categoria> {
    const { categoria } = criarCategoriaDto;

    const categoriaExiste = await this.categoriaModel.findOne({ categoria });
    if (categoriaExiste)
      throw new BadRequestException(`Categoria: ${categoria} já cadastrada!`);

    const categoriaCriada = new this.categoriaModel(criarCategoriaDto);
    return categoriaCriada.save();
  }

  async atualizarCategoria(
    categoria: string,
    atualizarCategoriaDto: AtualizarCategoriaDto
  ): Promise<void> {
    const categoriaEncontrada = await this.categoriaModel
      .findOne({ categoria })
      .exec();

    if (!categoriaEncontrada)
      throw new NotFoundException(`Categora: ${categoria} não encontrada!`);

    await this.categoriaModel.findOneAndUpdate(
      { categoria },
      {
        $set: atualizarCategoriaDto
      }
    );
  }

  async atribuirCategoriaJogador(params: string[]): Promise<void> {
    const categoria = params['categoria'];
    const idJogador = params['idJogador'];

    const categoriaExiste = await this.categoriaModel
      .findOne({ categoria })
      .exec();
    if (!categoriaExiste)
      throw new BadRequestException(`Categoria: ${categoria} não cadastrada!`);

    const jogadorExiste = await this.jogadoresService.consultarJogadorPeloId(
      idJogador
    );
    if (!jogadorExiste)
      throw new BadRequestException(
        `Jogador com id: ${idJogador} não cadastrada!`
      );

    const jogadorJaCadastradoCategoria = await this.categoriaModel
      .find({ categoria })
      .where('jogadores')
      .in(idJogador)
      .exec();

    if (jogadorJaCadastradoCategoria.length > 0)
      throw new BadRequestException(
        `Jogador com id: ${idJogador} já cadastrada na categoria!`
      );

    categoriaExiste.jogadores.push(idJogador);
    await this.categoriaModel.findOneAndUpdate(
      { categoria },
      { $set: categoriaExiste }
    );
  }
}
