import { expect } from 'chai';
import { describe, it, beforeEach, afterEach } from 'mocha';
import * as sinon from 'sinon';
import { GetVehicleService } from '../../../src/vehicle/domain/services/get-vehicle.service';
import { NotFoundException } from '@nestjs/common';

describe('GetVehicleService', () => {
  let useCase: GetVehicleService;
  let repositoryStub;

  beforeEach(() => {
    repositoryStub = {};
    repositoryStub.findById = sinon.stub().returns(null);

    useCase = new GetVehicleService(repositoryStub);
  });

  afterEach(() => {
    if (sinon.restore) {
      sinon.restore();
    }
  });

  describe('execute', () => {
    it('Should return a vehicle correctly when it exists', () => {
      const vehicle = { id: '1', model: 'Car' };
      repositoryStub.findById.returns(vehicle);

      const result = useCase.execute('1');
      expect(result).to.equal(vehicle);
    });

    it('Should throw NotFoundException when the vehicle does not exist', () => {
      expect(() => useCase.execute('1')).to.throw(
        NotFoundException,
        'Vehicle not found',
      );
    });
  });
});
