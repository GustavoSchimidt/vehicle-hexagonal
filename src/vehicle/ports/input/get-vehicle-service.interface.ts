import { Vehicle } from '../../domain/entities/vehicle.entity';

export interface IGetVehicleService {
  execute(id: string): Vehicle;
}
