/* eslint-disable no-useless-constructor */
import { inject, injectable } from 'tsyringe';
import AppError from '../../../../errors/AppError';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRespository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository,
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new AppError('Specification already exists');
    }

    await this.specificationsRepository.create({
      name,
      description,
    });
  }
}

// eslint-disable-next-line import/prefer-default-export
export { CreateSpecificationUseCase };