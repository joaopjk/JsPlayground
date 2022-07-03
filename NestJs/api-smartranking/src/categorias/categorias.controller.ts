import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CriaCategoriaDto } from './dtos/criar-categoria.dto';
import { Categoria } from './intefaces/categoria.interface';

@Controller('api/v1/categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async criarCategoria(
    @Body() criarCategoriaDto: CriaCategoriaDto
  ): Promise<Categoria> {
    return await this.categoriasService.criarCategoria(criarCategoriaDto);
  }
}
