import { ApiProperty } from '@nestjs/swagger';

export class Vehicle {
  @ApiProperty({
    description: 'ID único do veículo',
    example: '550e8400-e29b-41d4-a716-446655440000',
    required: false,
  })
  public id?: string;

  @ApiProperty({
    description: 'Placa do veículo',
    example: 'ABC1234',
  })
  public placa: string;

  @ApiProperty({
    description: 'Número do chassi do veículo',
    example: '9BWZZZ377VT004251',
  })
  public chassi: string;

  @ApiProperty({
    description: 'Número do RENAVAM do veículo',
    example: '12345678901',
  })
  public renavam: string;

  @ApiProperty({
    description: 'Modelo do veículo',
    example: 'Gol',
  })
  public modelo: string;

  @ApiProperty({
    description: 'Marca do veículo',
    example: 'Volkswagen',
  })
  public marca: string;

  @ApiProperty({
    description: 'Ano de fabricação do veículo',
    example: 2022,
  })
  public ano: number;

  constructor(
    placa: string,
    chassi: string,
    renavam: string,
    modelo: string,
    marca: string,
    ano: number,
    id?: string,
  ) {
    this.placa = placa;
    this.chassi = chassi;
    this.renavam = renavam;
    this.modelo = modelo;
    this.marca = marca;
    this.ano = ano;
    this.id = id;
  }
}
