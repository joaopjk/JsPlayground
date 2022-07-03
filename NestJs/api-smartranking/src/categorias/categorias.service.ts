import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CriaCategoriaDto } from './dtos/criar-categoria.dto';
import { Categoria } from './intefaces/categoria.interface';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectModel('Categoria') private readonly categoriaModel: Model<Categoria>
  ) {}

  async consultarTodasCategorias(): Promise<Categoria[]> {
    return await this.categoriaModel.find().exec();
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
}
