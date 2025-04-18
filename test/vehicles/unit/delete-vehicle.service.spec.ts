import { expect } from 'chai';
import { describe, it, beforeEach, afterEach } from 'mocha';
import * as sinon from 'sinon';
import { DeleteVehicleService } from '../../../src/vehicle/domain/services/delete-vehicle.service';
import { NotFoundException } from '@nestjs/common';

describe('DeleteVehicleService', () => {
  let useCase: DeleteVehicleService;
  let repositoryStub;

  beforeEach(() => {
    repositoryStub = {};
    repositoryStub.delete = sinon.stub().returns(null);
    repositoryStub.findById = sinon.stub().returns(null);

    useCase = new DeleteVehicleService(repositoryStub);
  });

  afterEach(() => {
    if (sinon.restore) {
      sinon.restore();
    }
  });

  describe('execute', () => {
    it('Should delete a vehicle correctly when it exists', () => {
      repositoryStub.findById.returns({ id: '1' });

      useCase.execute('1');
      expect(repositoryStub.delete.calledOnceWith('1')).to.be.true;
    });

    it('Should throw NotFoundException when vehicle does not exist', () => {
      repositoryStub.findById.returns(null);

      expect(() => useCase.execute('1')).to.throw(
        NotFoundException,
        'Vehicle not found',
      );
    });
  });
});
