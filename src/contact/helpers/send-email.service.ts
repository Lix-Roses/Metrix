import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as nodemailer from 'nodemailer';


@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      // Email config
      host: process.env.SERVIDOR_SMTP,
      port: process.env.PUERTO_SMTP,
      auth: {
      user: process.env.USUARIO_SMTP,
      pass: process.env.CONTRASENIA_SMTP,
      },
    });
  }

  async sendEmailWithAttachment(destinatarios: string,
    asunto: string,
    contenido: string | null = null, 
    info: any = null,
    rutaPdf: string | null = null,
  ) {
    const mailOptions = {
      from: process.env.FROM_SMTP,
      replyTo: process.env.USUARIO_SMTP,
      to: destinatarios,
      subject: asunto,
      html: contenido,
    };
    try {
      console.log(process.env.FROM_SMTP);
      let resultShipping = await this.transporter.sendMail(mailOptions);      
      return resultShipping;
    } catch (error) {
      console.log("Hubo el siguiente error en el envío : ", error);
      throw new InternalServerErrorException({ error: `Hubo el siguiente error en el envío : ${error}` })
    }

  }
}
