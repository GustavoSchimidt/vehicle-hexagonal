import { Vehicle } from '../entities/vehicle.entity';
import { IMemoryVehicleRepository } from '../../ports/output/memory-vehicle-repository.interface';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { UpdateVehicleDto } from '../../adapters/input/dtos/update-vehicle.dto';
import { IUpdateVehicleService } from '../../ports/input/update-vehicle-service.interface';

export class UpdateVehicleService implements IUpdateVehicleService {
  constructor(private vehicleRepository: IMemoryVehicleRepository) {}
  execute(id: string, vehicle: UpdateVehicleDto): Vehicle {
    const existingVehicle = this.vehicleRepository.findById(id);
    if (!existingVehicle) {
      throw new NotFoundException('Vehicle not found');
    }
    this.validateVehicle(id, vehicle);

    Object.assign(existingVehicle, {
      placa: vehicle.placa ?? existingVehicle.placa,
      chassi: vehicle.chassi ?? existingVehicle.chassi,
      renavam: vehicle.renavam ?? existingVehicle.renavam,
      modelo: vehicle.modelo ?? existingVehicle.modelo,
      marca: vehicle.marca ?? existingVehicle.marca,
      ano: vehicle.ano ?? existingVehicle.ano,
    });

    return this.vehicleRepository.update(id, existingVehicle);
  }

  validateVehicle(id: string, vehicleDto: UpdateVehicleDto): void {
    const { placa, chassi, renavam } = vehicleDto;

    if (!placa) return;
    if (!chassi) return;
    if (!renavam) return;

    const placaExists = this.vehicleRepository.findByPlaca(placa);
    const chassiExists = this.vehicleRepository.findByChassi(chassi);
    const renavamExists = this.vehicleRepository.findByRenavam(renavam);

    if (
      (placaExists && placaExists.id !== id) ||
      (chassiExists && chassiExists.id !== id) ||
      (renavamExists && renavamExists.id !== id)
    ) {
      throw new BadRequestException('placa, chassi or renavam already exists');
    }
  }
}
