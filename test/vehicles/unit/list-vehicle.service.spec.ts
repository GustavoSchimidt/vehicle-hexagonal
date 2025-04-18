import { expect } from 'chai';
import { describe, it, beforeEach, afterEach } from 'mocha';
import * as sinon from 'sinon';
import { ListVehicleService } from '../../../src/vehicle/domain/services/list-vehicle.service';

describe('ListVehicleService', () => {
  let useCase: ListVehicleService;
  let repositoryStub;
  const vehicles = [
    { id: '1', name: 'Car' },
    { id: '2', name: 'Bike' },
  ];

  beforeEach(() => {
    repositoryStub = {};
    repositoryStub.findAll = sinon.stub().returns(vehicles);

    useCase = new ListVehicleService(repositoryStub);
  });

  afterEach(() => {
    if (sinon.restore) {
      sinon.restore();
    }
  });

  describe('execute', () => {
    it('Should return all vehicles when they exist', () => {
      repositoryStub.findAll.returns(vehicles);

      const result = useCase.execute();

      expect(result).to.deep.equal(vehicles);
    });
  });
});
