import { IMemoryVehicleRepository } from '../../ports/output/memory-vehicle-repository.interface';
import { IGetVehicleService } from '../../ports/input/get-vehicle-service.interface';
import { Vehicle } from '../entities/vehicle.entity';
import { NotFoundException } from '@nestjs/common';

export class GetVehicleService implements IGetVehicleService {
  constructor(private vehicleRepository: IMemoryVehicleRepository) {}

  execute(id: string): Vehicle {
    const vehicle = this.vehicleRepository.findById(id);
    if (!vehicle) {
      throw new NotFoundException('Vehicle not found');
    }
    return vehicle;
  }
}
