import { Vehicle } from '../entities/vehicle.entity';
import { ICreateVehicleService } from '../../ports/input/create-vehicle-service.interface';
import { IMemoryVehicleRepository } from '../../ports/output/memory-vehicle-repository.interface';
import { CreateVehicleDto } from '../../adapters/input/dtos/create-vehicle.dto';
import { BadRequestException } from '@nestjs/common';

export class CreateVehicleService implements ICreateVehicleService {
  constructor(private vehicleRepository: IMemoryVehicleRepository) {}
  execute(vehicleDto: CreateVehicleDto): Vehicle {
    this.validateVehicle(vehicleDto);
    return this.vehicleRepository.save(vehicleDto);
  }

  validateVehicle(vehicleDto: CreateVehicleDto): void {
    const placaExists = this.vehicleRepository.findByPlaca(vehicleDto.placa);
    const chassiExists = this.vehicleRepository.findByChassi(vehicleDto.chassi);
    const renavamExists = this.vehicleRepository.findByRenavam(
      vehicleDto.renavam,
    );
    if (placaExists || chassiExists || renavamExists) {
      throw new BadRequestException('Vehicle already exists');
    }
  }
}
