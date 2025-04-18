import { CreateVehicleDto } from 'src/vehicle/adapters/input/dtos/create-vehicle.dto';
import { Vehicle } from 'src/vehicle/domain/entities/vehicle.entity';

export interface ICreateVehicleService {
  execute(vehicle: CreateVehicleDto): Vehicle;
}
