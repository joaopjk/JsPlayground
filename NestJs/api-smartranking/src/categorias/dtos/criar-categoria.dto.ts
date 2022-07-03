import { ArrayMinSize, IsArray, IsNotEmpty, IsString } from 'class-validator';
import { Evento } from '../intefaces/categoria.interface';

export class CriaCategoriaDto {
  @IsString()
  @IsNotEmpty()
  readonly categoria: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsArray()
  @ArrayMinSize(1)
  eventos: Array<Evento>;
}
