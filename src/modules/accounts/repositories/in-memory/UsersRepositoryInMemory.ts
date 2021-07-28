/* eslint-disable no-shadow */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable class-methods-use-this */
import User from '@modules/accounts/infra/typeorm/entities/User';
import ICreateUserDTO from '../../dtos/ICreateUserDTO';
import IUsersRepository from '../IUsersRepository';

export default class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({
    driver_license,
    email,
    name,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      driver_license,
      email,
      name,
      password,
    });

    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find(user => user.email === email);
  }

  async findById(id: string): Promise<User> {
    return this.users.find(user => user.id === id);
  }
}
