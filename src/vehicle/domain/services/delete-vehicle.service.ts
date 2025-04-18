import { IMemoryVehicleRepository } from '../../ports/output/memory-vehicle-repository.interface';
import { IDeleteVehicleService } from '../../ports/input/delete-vehicle-service.interface';
import { NotFoundException } from '@nestjs/common';

export class DeleteVehicleService implements IDeleteVehicleService {
  constructor(private vehicleRepository: IMemoryVehicleRepository) {}

  execute(id: string): void {
    const vehicle = this.vehicleRepository.findById(id);
    if (!vehicle) {
      throw new NotFoundException('Vehicle not found');
    }
    this.vehicleRepository.delete(id);
  }
}
