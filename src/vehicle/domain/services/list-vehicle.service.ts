import { IMemoryVehicleRepository } from '../../ports/output/memory-vehicle-repository.interface';
import { IListVehicleService } from '../../ports/input/list-vehicle-service.interface';
import { Vehicle } from '../entities/vehicle.entity';

export class ListVehicleService implements IListVehicleService {
  constructor(private vehicleRepository: IMemoryVehicleRepository) {}

  execute(): Vehicle[] {
    return this.vehicleRepository.findAll();
  }
}
