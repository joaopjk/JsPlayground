import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { UsersService } from './users.service';

describe('AuthService', () => {
  let service: AuthService;
  let fakeUsersService: Partial<UsersService>;

  beforeEach(async () => {
    fakeUsersService = {
      find: () => Promise.resolve([]),
      create: (email: string, password: string) =>
        Promise.resolve({ id: 1, email, password } as User),
    };

    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: fakeUsersService,
        },
      ],
    }).compile();

    service = module.get(AuthService);
  });

  it('can create an instance of auth service', async () => {
    expect(service).toBeDefined();
  });

  it('create a new user a salted and hashed password', async () => {
    const user = await service.signup('dafa@gmail.com', 'asdf');

    expect(user.password).not.toEqual('asdf');
    const [salt, hash] = user.password.split('.');
    expect(salt).toBeDefined();
    expect(hash).toBeDefined();
  });

  it('throws an error it user sings up with that is in user ', async () => {
    fakeUsersService.find = () =>
      Promise.resolve([
        { id: 1, email: 'dafa@gmail.com', password: 'asdf' } as User,
      ]);

    await expect(service.signup('asdf@asdf.com', 'asdf')).rejects.toThrow(
      BadRequestException,
    );
  });

  it('throws if sigin is called with a unused email', async () => {
    await expect(service.signin('asdf@asdf.com', 'asdf')).rejects.toThrow(
      NotFoundException,
    );
  });

  it('throw if an invalid password is provided', async () => {
    fakeUsersService.find = () =>
      Promise.resolve([{ email: 'dafa@gmail.com', password: 'asdf' } as User]);
    await expect(service.signin('dafa@gmail.com', 'kasdj')).rejects.toThrow(
      BadRequestException,
    );
  });

  it('returns a user if correct password is provided', async () => {
    const user = await service.signup('dafa@gmail.com', 'asdf');
    fakeUsersService.find = () =>
      Promise.resolve([
        { email: 'dafa@gmail.com', password: user.password } as User,
      ]);
    const userTest = await service.signin('dafa@gmail.com', 'asdf');
    expect(userTest).toBeDefined();
  });
});
