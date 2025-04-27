import { IsEmail, IsNumber, IsString } from 'class-validator';

export class ContactInterface {
  @IsString({ message: 'Nombre debe ser un texto' })
  fullName: string;
  @IsEmail({}, { message: 'Digitar un email que sea valido' })
  email: string;
  @IsString({ message: 'Seleccione un pais valido' })
  country?: string;
  @IsNumber({}, { message: 'El campo phone debe ser numerico' })
  phone?: number;
  message: string;
}
