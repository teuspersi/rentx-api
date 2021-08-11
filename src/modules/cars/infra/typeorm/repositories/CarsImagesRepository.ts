/* eslint-disable camelcase */
import ICarsImagesRepository from '@modules/cars/repositories/ICarsImagesRepository';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { getRepository, Repository } from 'typeorm';
import CarImage from '../entities/CarImage';

export default class CarsImageRepository implements ICarsImagesRepository {
  private repository: Repository<CarImage>;

  private carsRepository: ICarsRepository;

  constructor() {
    this.repository = getRepository(CarImage);
  }

  async create(car_id: string, image_name: string): Promise<CarImage> {
    const carImage = this.repository.create({
      car_id,
      image_name,
    });

    await this.repository.save(carImage);

    return carImage;
  }
}
