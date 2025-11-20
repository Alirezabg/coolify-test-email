const express = require('express');
const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');

const app = express();
const PORT = process.env.PORT || 3000;

// Configure AWS SES client
const sesClient = new SESClient({
  region: process.env.AWS_REGION || 'eu-west-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

app.use(express.static('public'));
app.use(express.json());

// Endpoint to send email
app.post('/send-email', async (req, res) => {
  const params = {
    Source: 'info@cyf.academy',
    Destination: {
      ToAddresses: ['alirezabg@gmail.com'],
    },
    Message: {
      Subject: {
        Data: 'Test Email from cyf.academy',
        Charset: 'UTF-8',
      },
      Body: {
        Html: {
          Data: `
            <html>
              <body>
                <h1>Test Email from cyf.academy</h1>
                <p>This is a test email sent from info@cyf.academy using Amazon SES.</p>
                <p>Sent at: ${new Date().toLocaleString()}</p>
              </body>
            </html>
          `,
          Charset: 'UTF-8',
        },
        Text: {
          Data: `Test Email from cyf.academy\n\nThis is a test email sent from info@cyf.academy using Amazon SES.\n\nSent at: ${new Date().toLocaleString()}`,
          Charset: 'UTF-8',
        },
      },
    },
  };

  try {
    const command = new SendEmailCommand(params);
    const result = await sesClient.send(command);
    console.log('Email sent successfully:', result.MessageId);
    res.json({
      success: true,
      message: 'Email sent successfully!',
      messageId: result.MessageId,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email',
      error: error.message,
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Email test app running on port ${PORT}`);
  console.log(`AWS Region: ${process.env.AWS_REGION || 'eu-west-1'}`);
});
