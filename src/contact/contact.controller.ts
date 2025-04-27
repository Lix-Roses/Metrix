import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactInterface } from './dto/contact.dto';
import { Response } from 'express';
import { get } from 'http';

@Controller('/api')
export class ContactController {
  constructor(private contactService: ContactService) {}
  @Get('/metrics/daily-submissions')
  async GETContact() {
    return await this.contactService.getContact();
  }
  /*Information obtained by the user  */
  @Post('/contact-submissions')
  createContact(
    @Res() response: Response,
    @Body(new ValidationPipe()) contact: ContactInterface,
  ) {
    return this.contactService.createContact(contact, response);
  }
}
