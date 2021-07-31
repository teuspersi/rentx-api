/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateRentalUseCase from './CreateRentalUseCase';

export default class CreateRentalController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { car_id, expected_return_date } = request.body;
    const { id } = request.user;

    const createRentalUseCase = container.resolve(CreateRentalUseCase);

    const rental = await createRentalUseCase.execute({
      user_id: id,
      car_id,
      expected_return_date,
    });

    return response.status(201).json(rental);
  }
}
