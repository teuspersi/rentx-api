/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListRentalsByUserUseCase from './ListRentalsByUserUseCase';

export default class ListRentalsByUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;

    const listRentalsByUserUseCase = container.resolve(
      ListRentalsByUserUseCase,
    );

    const rentals = await listRentalsByUserUseCase.execute(user_id);

    return response.json(rentals);
  }
}
