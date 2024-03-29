import { AuthenticationParams } from '@/domain/usecases';
import { faker } from '@faker-js/faker';
import { AccountModel } from '@/domain/models';

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export const mockAccountModel = (): AccountModel => ({
  acessToken: faker.random.alphaNumeric(),
});
