export default function generateHTMLAccepted(nombre_completo: string) {
    return `
        <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 900px;
            background: #ffffff;
            margin: 20px auto;
            padding: 20px;
            text-align: center;
            border: 1px solid #ddd;
        }
        .header {
            font-size: 18px;
            font-weight: bold;
            color: red;
        }
        .content {
            font-size: 14px;
            color: #000;
            margin-top: 10px;
        }
        .content a {
            color: #0056b3;
            text-decoration: none;
            font-weight: bold;
        }
        .footer {
            font-size: 12px;
            color: #888;
            margin-top: 20px;
            border-top: 1px solid #ddd;
            padding-top: 10px;
        }
    </style>
</head>
<body>
  <div class="container">
    <img src="logo.png" alt="Consultores Estratégicos Ltda." style="margin-bottom: 10px;">
    <div class="header">¡${nombre_completo}, gracias por ponerte en contacto con Consultores Estratégicos Ltda.!</div>
    <br>
    <div class="content">
      <b style="color: #00008B;">Hemos recibido tu solicitud y pronto un asesor se pondrá en contacto contigo para resolver cualquier duda.</b><br><br>
      <p style="color: #00008B;"><strong style="color: red;">Horario de atención:</strong><br><b style="color: #00008B;">Lunes a Viernes</b><br>9:00 a.m. - 6:00 p.m.</p>
    </div>
    <br><br>
    <div class="content"><b style="color: red;">¿Por qué elegirnos?</b></div>
    <br><br>
    <img src="beneficios.png" alt="Beneficios de trabajar con nosotros" style="margin-bottom: 10px;">
    <br><br>
    <div class="contact" style="color: #00008B;">
      Si necesitas más información o tienes alguna pregunta, por favor escríbenos a <a href="mailto:contacto@consultoresltda.com">contacto@consultoresltda.com</a> o visítanos en nuestras redes sociales como <a style="color: red;" href="https://www.facebook.com/consultoresltda">Consultores Estratégicos Ltda.</a> en Facebook.
    </div>
    <div class="footer">
      <p>AVISO DE CONFIDENCIALIDAD DE CORREO ELECTRÓNICO</p>
      <p>Al registrarte en nuestros formularios, autorizas a Consultores Estratégicos Ltda. a utilizar los datos proporcionados para contactarte y enviarte información sobre nuestros servicios. Para más detalles, visita nuestra política de privacidad en <a href="https://consultoresltda.com/politica-de-privacidad/">https://consultoresltda.com/politica-de-privacidad/</a></p>
      <p>Estamos comprometidos con brindarte una atención personalizada y eficaz. Si tienes alguna duda, no dudes en ponerte en contacto con nuestro equipo de atención al cliente escribiendo a <a href="mailto:servicioalcliente@consultoresltda.com">servicioalcliente@consultoresltda.com</a></p>
    </div>
  </div>
</body>
</html>

    `
}