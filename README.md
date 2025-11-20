# Email Test App for cyf.academy

Simple Node.js web application to test sending emails from `info@cyf.academy` using Amazon SES.

## Features

- 📧 Send test emails from `info@cyf.academy` to `alirezabg@gmail.com`
- 🎨 Beautiful, responsive web interface
- 🐳 Docker-ready for easy deployment to Coolify
- ✅ Built with Express.js and AWS SDK v3

## Prerequisites

- Node.js 18+ (for local development)
- AWS SES credentials with permission to send from `cyf.academy`
- Domain `cyf.academy` verified in AWS SES

## Environment Variables

Set these in Coolify when deploying:

```
AWS_REGION=eu-west-1
PORT=3000
```

**Note:** AWS credentials are NOT needed! The application uses the EC2 instance IAM role (`hosting_role`) which already has SES permissions.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set environment variables (local development only - not needed in Coolify):
   ```bash
   export AWS_ACCESS_KEY_ID=your_key
   export AWS_SECRET_ACCESS_KEY=your_secret
   export AWS_REGION=eu-west-1
   ```

3. Run the server:
   ```bash
   npm start
   ```

4. Open http://localhost:3000 in your browser

## Deploy to Coolify

1. Create a new application in Coolify
2. Connect this Git repository
3. Set the environment variables (AWS credentials)
4. Set the domain to `test.cyf.academy` (or any subdomain)
5. Deploy!

## How It Works

- The app serves a simple HTML page with a "Send Test Email" button
- Clicking the button sends a POST request to `/send-email`
- The server uses AWS SES to send an email from `info@cyf.academy` to `alirezabg@gmail.com`
- Success/error messages are displayed on the page

## Important Notes

⚠️ **SES Sandbox Mode**: If your SES account is in sandbox mode, you can only send to verified email addresses. Make sure `alirezabg@gmail.com` is verified, or request production access.

⚠️ **Domain Verification**: The domain `cyf.academy` must be verified in AWS SES before you can send emails from it. The Terraform configuration should handle this automatically.

## API Endpoints

- `GET /` - Serves the web interface
- `POST /send-email` - Sends a test email
- `GET /health` - Health check endpoint

## License

MIT
