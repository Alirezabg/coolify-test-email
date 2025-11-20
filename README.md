# Email Test App for cyf.academy

Simple Node.js web application to test sending emails from `info@cyf.academy` using Amazon SES.

## Features

- 📧 Send test emails from `info@cyf.academy` to `alirezabg@gmail.com`
- 🎨 Beautiful, responsive web interface
- 🐳 Docker-ready for easy deployment to Coolify
- ✅ Built with Express.js and AWS SDK v3

## Prerequisites

- Node.js 18+ (for local development)
- Coolify deployment on EC2 instance with `hosting_role` IAM role
- Domain `cyf.academy` verified in AWS SES (already configured)

## Environment Variables

Set these in Coolify when deploying:

```
AWS_REGION=eu-west-1
PORT=3000
```

**Note:** AWS credentials are NOT needed! The application uses the EC2 instance IAM role (`hosting_role`) which already has SES permissions.

## Local Development

**Note:** This app is designed to run on the Coolify EC2 instance which has the `hosting_role` IAM role with SES permissions. No AWS credentials are needed.

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set environment variable:
   ```bash
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
3. Set the environment variables:
   - `PORT=3000`
5. Deploy!

**Note:** No AWS credentials needed! The EC2 instance already has the `hosting_role` IAM role with SES permissions.

## How It Works

- The app serves a simple HTML page with a "Send Test Email" button
- Clicking the button sends a POST request to `/send-email`
- The server uses AWS SES to send an email from `info@cyf.academy` to `alirezabg@gmail.com`
- Success/error messages are displayed on the page

## Important Notes

✅ **Domain Verified**: The domain `cyf.academy` is already verified in AWS SES (eu-west-1).

✅ **IAM Role**: The Coolify EC2 instance has the `hosting_role` IAM role with permissions to send emails from `*@cyf.academy`.


⚠️ **No Credentials Needed**: When deployed to Coolify, the app uses the EC2 instance IAM role automatically. 


