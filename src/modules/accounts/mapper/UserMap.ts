/* eslint-disable camelcase */
import { classToClass } from 'class-transformer';
import IUserResponseDTO from '../dtos/IUserResponseDTO';
import User from '../infra/typeorm/entities/User';

export default class UserMap {
  static toDTO({
    email,
    name,
    id,
    avatar,
    driver_license,
    avatar_url,
  }: User): IUserResponseDTO {
    const user = classToClass({
      email,
      name,
      id,
      avatar,
      driver_license,
      avatar_url,
    });

    return user;
  }
}
