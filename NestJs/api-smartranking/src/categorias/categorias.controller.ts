import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { AtualizarCategoriaDto } from './dtos/atualizar-categoria.dto';
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

  @Get()
  async consultarCategorias(): Promise<Array<Categoria>> {
    return await this.categoriasService.consultarTodasCategorias();
  }

  @Get('/:categoria')
  async consultarCategoriaPeloId(
    @Param('categoria') categoria: string
  ): Promise<Categoria> {
    return this.categoriasService.consultarCategoriaPeloId(categoria);
  }

  @Put('/:categoria')
  @UsePipes(ValidationPipe)
  async atualizarCategoria(
    @Param('categoria') categoria: string,
    @Body() atualizarCategoriaDto: AtualizarCategoriaDto
  ): Promise<void> {
    await this.categoriasService.atualizarCategoria(
      categoria,
      atualizarCategoriaDto
    );
  }

  @Post('/:categoria/jogadores/:idJogador')
  async atribuirCategoriaJogador(@Param() params: []): Promise<void> {
    return await this.categoriasService.atribuirCategoriaJogador(params);
  }
}
