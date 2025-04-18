import { IsNumber, IsString, Length, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateVehicleDto {
  @ApiProperty({
    description: 'Placa do veículo',
    example: 'ABC1234',
    minLength: 7,
    maxLength: 8,
    required: false,
  })
  @IsString()
  @Length(7, 8)
  placa?: string;

  @ApiProperty({
    description: 'Número do chassi do veículo',
    example: '9BWZZZ377VT004251',
    minLength: 17,
    maxLength: 17,
    required: false,
  })
  @IsString()
  @Length(17, 17)
  chassi?: string;

  @ApiProperty({
    description: 'Número do RENAVAM do veículo',
    example: '12345678901',
    minLength: 11,
    maxLength: 11,
    required: false,
  })
  @IsString()
  @Length(11, 11)
  renavam?: string;

  @ApiProperty({
    description: 'Modelo do veículo',
    example: 'Gol',
    required: false,
  })
  @IsString()
  modelo?: string;

  @ApiProperty({
    description: 'Marca do veículo',
    example: 'Volkswagen',
    required: false,
  })
  @IsString()
  marca?: string;

  @ApiProperty({
    description: 'Ano de fabricação do veículo',
    example: 2022,
    minimum: 1900,
    maximum: new Date().getFullYear() + 1,
    required: false,
  })
  @IsNumber()
  @Min(1900)
  @Max(new Date().getFullYear() + 1)
  ano?: number;
}
