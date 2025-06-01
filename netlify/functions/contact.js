const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Méthode non autorisée' }),
    };
  }

  try {
    const { name, email, phone, comments } = JSON.parse(event.body);

    if (!name || !email || !comments) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Champs requis manquants.' }),
      };
    }

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Define email options
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL, // your destination email
      subject: `Nouveau message de ${name}`,
      html: `
        <h3>Vous avez reçu un nouveau message :</h3>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || 'Non fourni'}</p>
        <p><strong>Message :</strong><br>${comments}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message envoyé avec succès !' }),
    };
  } catch (error) {
    console.error('Erreur d’envoi :', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Erreur serveur. Veuillez réessayer plus tard.' }),
    };
  }
};
