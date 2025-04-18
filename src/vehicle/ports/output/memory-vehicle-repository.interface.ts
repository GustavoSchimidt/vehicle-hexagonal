import { Vehicle } from 'src/vehicle/domain/entities/vehicle.entity';

export interface IMemoryVehicleRepository {
  save(vehicle: Vehicle): Vehicle;
  findAll(): Vehicle[];
  findById(id: string): Vehicle | undefined;
  update(id: string, vehicle: Vehicle): Vehicle;
  delete(id: string): void;
  findByPlaca(placa: string): Vehicle | undefined;
  findByChassi(chassi: string): Vehicle | undefined;
  findByRenavam(renavam: string): Vehicle | undefined;
}
