import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller('nft')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('generate')
  @UseInterceptors(FileInterceptor(''))
  async getHello(@UploadedFile() file: Express.Multer.File): Promise<any> {
    console.log(file);
    return await this.appService.getHello(file);
  }
}
