import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

export class CreateVehicleDto {
  @ApiProperty({
    description: 'Placa do veículo',
    example: 'ABC1234',
    minLength: 7,
    maxLength: 8,
  })
  @IsString()
  @IsNotEmpty()
  @Length(7, 8)
  placa: string;

  @ApiProperty({
    description: 'Número do chassi do veículo',
    example: '9BWZZZ377VT004251',
    minLength: 17,
    maxLength: 17,
  })
  @IsString()
  @IsNotEmpty()
  @Length(17, 17)
  chassi: string;

  @ApiProperty({
    description: 'Número do RENAVAM do veículo',
    example: '12345678901',
    minLength: 11,
    maxLength: 11,
  })
  @IsString()
  @IsNotEmpty()
  @Length(11, 11)
  renavam: string;

  @ApiProperty({
    description: 'Modelo do veículo',
    example: 'Gol',
  })
  @IsString()
  @IsNotEmpty()
  modelo: string;

  @ApiProperty({
    description: 'Marca do veículo',
    example: 'Volkswagen',
  })
  @IsString()
  @IsNotEmpty()
  marca: string;

  @ApiProperty({
    description: 'Ano de fabricação do veículo',
    example: 2022,
    minimum: 1900,
    maximum: new Date().getFullYear() + 1,
  })
  @IsNumber()
  @IsNotEmpty()
  @Min(1900)
  @Max(new Date().getFullYear() + 1)
  ano: number;
}
