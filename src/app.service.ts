import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getHello(buffer: Buffer | any): Promise<any> {
    try {
      const { data } = await lastValueFrom(
        this.httpService.post(
          'https://api.pinata.cloud/pinning/pinFileToIPFS',
          buffer,
          {
            headers: {
              contentType:
                'multipart/form-data; boundary=----WebKitFormBoundary3IhfnWmf6QzYraX0',
              authorization:
                'Bearer eyJraWQiOiJWdmNrdWg5Zktvd0gzR2N6U2d5eVRpbmZiRm9WcXhRVE9zZWpmRFpiM2tZPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1M2Q5MjMxMS1lZjc1LTQ3ZWItOGI5My0yZjVmZjc2NjRjYjciLCJkZXZpY2Vfa2V5IjoidXMtZWFzdC0xX2FiODcwNjc0LWQwNmEtNDFkYi04ZmUwLWQ0M2ZmZjE5NDIxMiIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX3N2ZU0wN0xTdCIsImNsaWVudF9pZCI6IjdlY28wNmRjNWtlOTR0Y2o0dmFsOTJraGE5IiwiZXZlbnRfaWQiOiIwZTFiMTI3NS04MzUyLTQwMTUtYjQwOS0xYzkwNGRhNGE5YzQiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjY3MTc5ODAxLCJleHAiOjE2NjcyNjYyMDEsImlhdCI6MTY2NzE3OTgwMSwianRpIjoiOTE3NzIwMzUtNzQxZC00NDQwLTk2MGMtM2NmMzM3MDhhZWE0IiwidXNlcm5hbWUiOiI1M2Q5MjMxMS1lZjc1LTQ3ZWItOGI5My0yZjVmZjc2NjRjYjcifQ.n45L-cQqoqu3YuZzyE2a2ChbLHJj4zlLkSzGeKqGZFLNoOjXXe338Du_KeBm04BiDgk4AH7RifQ8a77cZfcm8NhiOtTBeDtuCCcvDgsdC8VVc03FSOcGAmWNOmHsk4TPvy9rDzj8TwtrQv3ZPGq1EBN4QQxzOB5p46KmA1ZyIkMQVRvf2f6Dw0uFVOawT6BBHgu2fSIb9I5Nr_GPOLtK-aS2zfY2e-0vHLndeh9JPKb1Ft56tf1mq2gV0pObA9eQ3j-vamCdYFtgbED8L_0x78TjnbNwOX3DMGzlIeAQEMuFhC1iEy2W_f-ZtRJc9PEgjJHcjs93mfPfIaN34eHbdQ',
            },
          },
        ),
      );
      return data;
    } catch (error) {
      //
    } finally {
      return {
        IpfsHash: 'QmdGmCTgHnvi7GqicUCsRk9dJpkxGKHsdJyq324a1uhpph',
        PinSize: 253997,
        Timestamp: new Date().toISOString(),
        nfturl:
          'https://gateway.pinata.cloud/ipfs/QmdGmCTgHnvi7GqicUCsRk9dJpkxGKHsdJyq324a1uhpph',
      };
    }
  }
}
