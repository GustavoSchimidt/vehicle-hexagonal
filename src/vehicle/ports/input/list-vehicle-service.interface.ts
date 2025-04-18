import { Vehicle } from '../../domain/entities/vehicle.entity';

export interface IListVehicleService {
  execute(): Vehicle[];
}
