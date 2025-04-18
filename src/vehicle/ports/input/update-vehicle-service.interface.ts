import { Vehicle } from 'src/vehicle/domain/entities/vehicle.entity';
import { UpdateVehicleDto } from '../../adapters/input/dtos/update-vehicle.dto';

export interface IUpdateVehicleService {
  execute(id: string, vehicle: UpdateVehicleDto): Vehicle;
}
