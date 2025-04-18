import { v4 as uuid } from 'uuid';
import { Vehicle } from '../../../domain/entities/vehicle.entity';
import { IMemoryVehicleRepository } from '../../../ports/output/memory-vehicle-repository.interface';

export class MemoryVehicleRepository implements IMemoryVehicleRepository {
  private vehicles: Vehicle[] = [];

  constructor() {}

  save(vehicle: Vehicle): Vehicle {
    const id = uuid();
    vehicle.id = id;
    this.vehicles.push(vehicle);
    return vehicle;
  }

  findAll(): Vehicle[] {
    return [...this.vehicles];
  }

  findById(id: string): Vehicle | undefined {
    return this.vehicles.find((vehicle) => vehicle.id === id);
  }

  update(id: string, vehicle: Vehicle): Vehicle {
    const index = this.vehicles.findIndex((v) => v.id === id);
    vehicle.id = id;
    this.vehicles[index] = vehicle;
    return vehicle;
  }

  delete(id: string): void {
    const index = this.vehicles.findIndex((v) => v.id === id);
    this.vehicles.splice(index, 1);
  }

  findByPlaca(placa: string): Vehicle | undefined {
    return this.vehicles.find((vehicle) => vehicle.placa === placa);
  }

  findByChassi(chassi: string): Vehicle | undefined {
    return this.vehicles.find((vehicle) => vehicle.chassi === chassi);
  }

  findByRenavam(renavam: string): Vehicle | undefined {
    return this.vehicles.find((vehicle) => vehicle.renavam === renavam);
  }
}
