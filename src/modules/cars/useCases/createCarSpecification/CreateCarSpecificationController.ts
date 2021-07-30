/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCarSpecificationUseCase from './CreateCarSpecificationUseCase';

export default class CreateCarSpecificationController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { specifications_id } = request.body;

    const createCarSpecificationUseCase = container.resolve(
      CreateCarSpecificationUseCase,
    );

    const cars = await createCarSpecificationUseCase.execute({
      car_id: id,
      specifications_id,
    });

    return response.json(cars);
  }
}
