import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { UpdateVehicleDto } from '../dtos/update-vehicle.dto';
import { CreateVehicleDto } from '../dtos/create-vehicle.dto';
import { Vehicle } from '../../../domain/entities/vehicle.entity';
import { ICreateVehicleService } from '../../../ports/input/create-vehicle-service.interface';
import { IGetVehicleService } from '../../../ports/input/get-vehicle-service.interface';
import { IUpdateVehicleService } from '../../../ports/input/update-vehicle-service.interface';
import { IDeleteVehicleService } from '../../../ports/input/delete-vehicle-service.interface';
import { IListVehicleService } from '../../../ports/input/list-vehicle-service.interface';

@ApiTags('vehicle')
@Controller('vehicle')
export class VehicleController {
  constructor(
    @Inject('ICreateVehicleService')
    private readonly createVehicleService: ICreateVehicleService,
    @Inject('IGetVehicleService')
    private readonly getvehicleService: IGetVehicleService,
    @Inject('IUpdateVehicleService')
    private readonly updateVehicleService: IUpdateVehicleService,
    @Inject('IDeleteVehicleService')
    private readonly deleteVehicleService: IDeleteVehicleService,
    @Inject('IListVehicleService')
    private readonly listvehicleService: IListVehicleService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new vehicle' })
  @ApiBody({ type: CreateVehicleDto, description: 'Vehicle data to create' })
  @ApiResponse({
    status: 201,
    description: 'Vehicle successfully created',
    type: Vehicle,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  createVehicle(@Body() createVehicleDto: CreateVehicleDto): Vehicle {
    return this.createVehicleService.execute(createVehicleDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all vehicles' })
  @ApiResponse({
    status: 200,
    description: 'List of all vehicles',
    type: [Vehicle],
  })
  getAllVehicles(): Vehicle[] {
    return this.listvehicleService.execute();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get vehicle by ID' })
  @ApiParam({ name: 'id', description: 'Vehicle ID' })
  @ApiResponse({
    status: 200,
    description: 'Vehicle found',
    type: Vehicle,
  })
  @ApiResponse({ status: 404, description: 'Vehicle not found' })
  getVehicleById(@Param('id') id: string): Vehicle {
    return this.getvehicleService.execute(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a vehicle' })
  @ApiParam({ name: 'id', description: 'Vehicle ID' })
  @ApiBody({ type: UpdateVehicleDto, description: 'Vehicle data to update' })
  @ApiResponse({
    status: 200,
    description: 'Vehicle successfully updated',
    type: Vehicle,
  })
  @ApiResponse({ status: 404, description: 'Vehicle not found' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  updateVehicle(
    @Param('id') id: string,
    @Body() updateVehicleDto: UpdateVehicleDto,
  ): Vehicle {
    return this.updateVehicleService.execute(id, updateVehicleDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a vehicle' })
  @ApiParam({ name: 'id', description: 'Vehicle ID' })
  @ApiResponse({ status: 204, description: 'Vehicle successfully deleted' })
  @ApiResponse({ status: 404, description: 'Vehicle not found' })
  deleteVehicle(@Param('id') id: string): void {
    this.deleteVehicleService.execute(id);
  }
}
