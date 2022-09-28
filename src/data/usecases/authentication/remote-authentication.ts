import { HttpPostClient } from '@/data/protocols/http/http-post-client';
import { HttpStatusCode } from '@/data/protocols/http/http-response';
import { AuthenticationParams } from '@/domain/usecases/authentication';
import { InvalidCredentialsError } from './../../../domain/erros/invalid-credentials-error';
import { UnexpectedError } from './../../../domain/erros/unexpected-error';

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}
  async auth(params: AuthenticationParams): Promise<void> {
    const htttpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });

    switch (htttpResponse.statusCode) {
      case HttpStatusCode.ok:
        break;
      case HttpStatusCode.unathorized:
        throw new InvalidCredentialsError();
      case HttpStatusCode.badRequest:
        throw new UnexpectedError();
      default:
        throw new UnexpectedError();
    }
  }
}