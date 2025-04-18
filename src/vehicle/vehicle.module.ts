import { Module } from '@nestjs/common';
import { VehicleController } from './adapters/input/controllers/vehicle.controller';
import { MemoryVehicleRepository } from './adapters/output/repositories/memory-vehicle.repository';
import { CreateVehicleService } from './domain/services/create-vehicle.service';
import { UpdateVehicleService } from './domain/services/update-vehicle.service';
import { DeleteVehicleService } from './domain/services/delete-vehicle.service';
import { ListVehicleService } from './domain/services/list-vehicle.service';
import { GetVehicleService } from './domain/services/get-vehicle.service';

@Module({
  controllers: [VehicleController],
  providers: [
    {
      provide: 'ICreateVehicleService',
      useFactory: (vehicleRepository: MemoryVehicleRepository) => {
        return new CreateVehicleService(vehicleRepository);
      },
      inject: ['IMemoryVehicleRepository'],
    },
    {
      provide: 'IGetVehicleService',
      useFactory: (vehicleRepository: MemoryVehicleRepository) => {
        return new GetVehicleService(vehicleRepository);
      },
      inject: ['IMemoryVehicleRepository'],
    },
    {
      provide: 'IUpdateVehicleService',
      useFactory: (vehicleRepository: MemoryVehicleRepository) => {
        return new UpdateVehicleService(vehicleRepository);
      },
      inject: ['IMemoryVehicleRepository'],
    },
    {
      provide: 'IListVehicleService',
      useFactory: (vehicleRepository: MemoryVehicleRepository) => {
        return new ListVehicleService(vehicleRepository);
      },
      inject: ['IMemoryVehicleRepository'],
    },
    {
      provide: 'IDeleteVehicleService',
      useFactory: (vehicleRepository: MemoryVehicleRepository) => {
        return new DeleteVehicleService(vehicleRepository);
      },
      inject: ['IMemoryVehicleRepository'],
    },
    {
      provide: 'IMemoryVehicleRepository',
      useClass: MemoryVehicleRepository,
    },
  ],
})
export class VehicleModule {}
