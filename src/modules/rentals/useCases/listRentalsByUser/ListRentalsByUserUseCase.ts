/* eslint-disable camelcase */
import Rental from '@modules/rentals/infra/typeorm/entities/Rental';
import RentalsRepository from '@modules/rentals/infra/typeorm/repositories/RentalsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class ListRentalsByUserUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @inject('RentalsRepository')
    private rentalsRepository: RentalsRepository,
  ) {}

  async execute(user_id: string): Promise<Rental[]> {
    const rentalsByUser = await this.rentalsRepository.findByUser(user_id);

    return rentalsByUser;
  }
}
