/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import ICarsImagesRepository from '@modules/cars/repositories/ICarsImagesRepository';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import IStorageProvider from '@shared/container/providers/StorageProvider/IStorageProvider';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  car_id: string;
  images_name: string[];
}

@injectable()
export default class UploadCarImagesUseCase {
  constructor(
    @inject('CarsImageRepository')
    private carsImagesRepository: ICarsImagesRepository,
    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) {}

  async execute({ car_id, images_name }: IRequest): Promise<void> {
    const car = await this.carsRepository.findById(car_id);

    if (!car) {
      throw new AppError('Car does not exists');
    }

    images_name.map(async image => {
      await this.carsImagesRepository.create(car_id, image);
      await this.storageProvider.save(image, 'cars');
    });
  }
}
