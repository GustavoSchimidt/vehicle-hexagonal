import { expect } from 'chai';
import { describe, it, beforeEach, afterEach } from 'mocha';
import * as sinon from 'sinon';
import { CreateVehicleService } from '../../../src/vehicle/domain/services/create-vehicle.service';
import { CreateVehicleDto } from 'src/vehicle/adapters/input/dtos/create-vehicle.dto';

describe('CreateVehicleService', () => {
  let useCase: CreateVehicleService;
  let repositoryStub;
  const vehicleDto: CreateVehicleDto = {
    placa: 'ABC1234',
    chassi: '12345678901234567',
    renavam: '123456789',
    modelo: 'Fiat Uno',
    marca: 'Fiat',
    ano: 2005,
  };

  beforeEach(() => {
    repositoryStub = {};
    repositoryStub.save = sinon.stub().returnsArg(0);
    repositoryStub.findByPlaca = sinon.stub().returns(null);
    repositoryStub.findByChassi = sinon.stub().returns(null);
    repositoryStub.findByRenavam = sinon.stub().returns(null);

    useCase = new CreateVehicleService(repositoryStub);
  });

  afterEach(() => {
    if (sinon.restore) {
      sinon.restore();
    }
  });

  describe('execute', () => {
    it('Should save a vehicle correctly when data is valid', () => {
      const result = useCase.execute(vehicleDto);

      expect(result).to.deep.equal(vehicleDto);
      expect(repositoryStub.save.calledOnceWith(vehicleDto)).to.be.true;
    });

    it('Should throw BadRequestException if vehicle with same placa exists', () => {
      repositoryStub.findByPlaca.returns(vehicleDto);

      expect(() => useCase.execute(vehicleDto)).to.throw(
        'Vehicle already exists',
      );
    });

    it('Should throw BadRequestException if vehicle with same chassi exists', () => {
      repositoryStub.findByChassi.returns(vehicleDto);

      expect(() => useCase.execute(vehicleDto)).to.throw(
        'Vehicle already exists',
      );
    });

    it('Should throw BadRequestException if vehicle with same renavam exists', () => {
      repositoryStub.findByRenavam.returns(vehicleDto);

      expect(() => useCase.execute(vehicleDto)).to.throw(
        'Vehicle already exists',
      );
    });
  });
});
