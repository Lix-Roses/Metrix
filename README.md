Descripccion del proyecto
Este proyecto es una aplicación backend construida con NestJS que permite gestionar y almacenar los envíos de contacto a través de un formulario web. El sistema recibe datos como el nombre, correo electrónico, teléfono y mensaje de los usuarios. Además, realiza validaciones en tiempo real y envía notificaciones por correo electrónico tanto al usuario como a los administradores del sistema. Los registros de contacto se almacenan en una base de datos MySQL, permitiendo consultas específicas como la cantidad de envíos realizados en el día.

Instrucciones de configuración (variables de entorno para BD, email, etc.).

primero, el script utilizado en la base de datos de mysql fue el siguiente 

create database contact;
use contact;
CREATE TABLE contact_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullName VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    country VARCHAR(100),
    phone VARCHAR(20),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Pasos para crear las variables de entorno 
Crea un archivo .env en la raíz del proyecto.

Agrega las siguientes variables de entorno a tu archivo .env.

Variables para la Base de Datos (MySQL):

DB_HOST: Dirección del host de la base de datos (localhost).

DB_PORT: Puerto de la base de datos (3306).

DB_USERNAME: Usuario para acceder a la base de datos (root).

DB_PASSWORD: Contraseña del usuario de la base de datos (root).

DB_NAME: Nombre de la base de datos ( contact).

Variables para el Envío de Correos Electrónicos (Nodemailer):

SMTP_HOST: Dirección del servidor SMTP (smtp-pulse.com).

SMTP_PORT: Puerto del servidor SMTP (465).

SMTP_SECURITY: Tipo de seguridad del servidor SMTP (puede ser SSL o TLS).

SMTP_USER: Usuario para el servidor SMTP (tu dirección de correo electrónico).

SMTP_PASS: Contraseña del usuario del servidor SMTP.

SMTP_FROM: Dirección de correo electrónico del remitente.

SMTP_REPLY_TO: Dirección de correo para la respuesta del cliente (usualmente el mismo que SMTP_USER).

Correo del Administrador (para notificaciones):

ADMIN_EMAIL: Correo electrónico del administrador (se utilizará para recibir notificaciones de nuevos contactos).

Instalacion y configuracion de dependencias 

orden de uso de inicio a fin 
1. npm install
2. npm install --save @nestjs/typeorm typeorm mysql2
3. npm i nodemailer
3. npm install class-transformer
4. npm install dotenv

Inicializacion del proyecto, para empezar a utiliar el proyecto se utilizara la variable 
npm run start

si queremos verlo desde el desarollo usararemos 
npm run start:dev

Para realizar las pruebas, en caso de usar visual code studio, instalamos la extencion de thunder cliente (basicamente postman pero desde vcs) el cual tiene su misma funcionalidad, para ingresar datos a la base de datos se utiliara la siguiente url  localhost:3000/api/contact-submissions utilizando el metodo POST, y para hacer nuestra consulta a l abase de datos, utilizaremos el metodo GET con el siguiente url localhost:3000/api/metrics/daily-submissions

En caso de usar postman directamente, ambas url deberian funcionar de la misma manera.

para realizar pruebas podemos usar el siguiente JSON 

{
  "fullName": "Carlos",
  "email": "correoejemplo@outlook.com",
  "country": "Colombia",
  "phone": 3003718468,
  "message": "Necesito ponerme en contacto para adquirir sus servicio"


}


Preguntas de razonamiento: 

1.¿Por qué elegiste Express o NestJS?
respuesta: Escogí NestJS por la experiencia previa manejando el framework. Al ser modular, permite separar las funciones en módulos independientes, evitando la sobrecarga de archivos y mejorando el orden del proyecto. La estructura se basa en capas (Controller, Service, Repository), donde cada módulo gestiona una funcionalidad específica. Para el esquema de la base de datos elegí una tabla simple de contactos, optimizada para consultas rápidas diarias, enfocándome en simplicidad y eficiencia.

2.Escalabilidad y Mejoras
Respuesta: por medio de base de datos realizaria indices y asigndo las columnas pertinentes con el fin de realizar una mayor cantidad de consultas. En el codigo buscaria realizar optimizaciones y validaciones las cuales permitan a el codigo actuar y funcionar con una menor carga.

3.Alternativas y Trade-offs 
Respuesta: Por seguridad utilizaria el JSON web token para implementar autentificaciones al momento de implementar consultas.

4.Endpoint de Métricas
Respuesta: A la hora de hacer la logica de GET, busque establecer una franja horaria, en el dia actual, es decir, decirle desde que horas inicia el dia y hasta que horas acaba, una vez realizado esto, busque hacer un conteo de la cantidad de entradras que cumplieran la condicion en mi base de datos, segun las que recibiera las contaria para ser utilizadas en el mensaje final, es decir, "Conteo: "x"" cantidad de entradas.