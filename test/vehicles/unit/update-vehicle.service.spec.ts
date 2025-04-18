import { expect } from 'chai';
import { describe, it, beforeEach, afterEach } from 'mocha';
import * as sinon from 'sinon';
import { UpdateVehicleService } from '../../../src/vehicle/domain/services/update-vehicle.service';
import { UpdateVehicleDto } from 'src/vehicle/adapters/input/dtos/update-vehicle.dto';

describe('UpdateVehicleService', () => {
  let useCase: UpdateVehicleService;
  let repositoryStub;
  const vehicleDto: UpdateVehicleDto = {
    placa: 'ABC1234',
    chassi: '12345678901234567',
    renavam: '123456789',
    modelo: 'Fiat Uno',
    marca: 'Fiat',
    ano: 2005,
  };

  beforeEach(() => {
    repositoryStub = {};
    repositoryStub.update = sinon.stub().returnsArg(1);
    repositoryStub.findById = sinon.stub().returns(null);
    repositoryStub.findByPlaca = sinon.stub().returns(null);
    repositoryStub.findByChassi = sinon.stub().returns(null);
    repositoryStub.findByRenavam = sinon.stub().returns(null);

    useCase = new UpdateVehicleService(repositoryStub);
  });

  afterEach(() => {
    if (sinon.restore) {
      sinon.restore();
    }
  });

  describe('execute', () => {
    it('Should save a vehicle correctly when data is valid', () => {
      repositoryStub.findById.returns(vehicleDto);

      const result = useCase.execute('1', vehicleDto);
      expect(result).to.deep.equal(vehicleDto);
      expect(repositoryStub.update.calledOnceWith('1', vehicleDto)).to.be.true;
    });

    it('Should throw NotFoundException when vehicle does not exist', () => {
      repositoryStub.findById.returns(null);

      expect(() => useCase.execute('1', vehicleDto)).to.throw(
        'Vehicle not found',
      );
    });

    it('Should throw BadRequestException when placa already exists', () => {
      repositoryStub.findById.returns(vehicleDto);
      repositoryStub.findByPlaca.returns(vehicleDto);

      expect(() => useCase.execute('1', vehicleDto)).to.throw(
        'placa, chassi or renavam already exists',
      );
    });

    it('Should throw BadRequestException when chassi already exists', () => {
      repositoryStub.findById.returns(vehicleDto);
      repositoryStub.findByChassi.returns(vehicleDto);

      expect(() => useCase.execute('1', vehicleDto)).to.throw(
        'placa, chassi or renavam already exists',
      );
    });

    it('Should throw BadRequestException when renavam already exists', () => {
      repositoryStub.findById.returns(vehicleDto);
      repositoryStub.findByRenavam.returns(vehicleDto);

      expect(() => useCase.execute('1', vehicleDto)).to.throw(
        'placa, chassi or renavam already exists',
      );
    });
  });
});
