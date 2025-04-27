import { Injectable } from '@nestjs/common';
import { ContactInterface } from './dto/contact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { Between, Repository } from 'typeorm';
import generateHTMLAccepted from './template_email/template-aceptado';
import { EmailService } from './helpers/send-email.service';


@Injectable()
export class ContactService {
  constructor(
    private readonly emailService: EmailService,
    @InjectRepository(Contact) private contactRepository: Repository<Contact>,
  ) { }
  private contacts: ContactInterface[] = [];
  /*Storage of information */
  async createContact(contact: any, response: any) {
    const findContact = await this.contactRepository.findOne({
      where: { email: contact.email },
    });
    if (findContact) {
      /* Response with status code 400 and the message that includes the email */
      return response.status(400).json({
        error: 'El correo electrónico ya está registrado.',
        email: contact.email,
      });
    }
    const newContac = this.contactRepository.create(contact);
    const contactCreated = await this.contactRepository.save(newContac);
    let subject = "New contact notification!";
    await this.sendEmailNotification(contact.email, contact.fullName, subject);
    await this.sendEmailNotification(
      process.env.email_admin,
      contact.fullName,
      subject,
    );
    return response.status(201).json(
      contactCreated
    );
  }

  async sendEmailNotification(email: any, fullName: string, subject: string) {
    let body;
    body = generateHTMLAccepted(fullName);
    const result = await this.emailService.sendEmailWithAttachment(
      email,
      subject,
      body,
    );
  }

  /* get list from db  */
  async getContact(): Promise<{ conteo: number }> {
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));  /* Setting the start time */
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));  /* Setting the end time */

    try {
      /* Get the count of contacts whose 'created_at' is between the start and end of the day */
      const count = await this.contactRepository.count({
        where: {
          created_at: Between(startOfDay, endOfDay),
        },
      });

      return { conteo: count }; // Return the count in the expected format
    } catch (error) {
      throw new Error('Error al realizar el conteo de contactos del día');
    }
  }
}

