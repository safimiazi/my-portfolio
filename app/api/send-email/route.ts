import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mohibullamiazi@gmail.com",
        pass: "ffadywntzhxglhyl",
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "mohibullamiazi@gmail.com",
      subject: `New Portfolio Message from ${name}`,
      text: `
    Name: ${name}
    Email: ${email}
    
    Message:
    ${message}
  `,
      html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>New Portfolio Message</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
        }
        .container {
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 30px;
        }
        .header {
          text-align: center;
          padding-bottom: 20px;
          border-bottom: 1px solid #eeeeee;
          margin-bottom: 20px;
        }
        .header h1 {
          color: #2c3e50;
          margin: 0;
          font-size: 24px;
        }
        .content {
          padding: 10px 0;
        }
        .detail-item {
          margin-bottom: 15px;
        }
        .detail-item strong {
          color: #2c3e50;
          display: block;
          margin-bottom: 5px;
          font-size: 16px;
        }
        .detail-item p {
          margin: 0;
          padding: 8px 12px;
          background-color: #f5f7fa;
          border-radius: 4px;
          font-size: 15px;
        }
        .message-content {
          padding: 12px;
          background-color: #f5f7fa;
          border-radius: 4px;
          border-left: 4px solid #3498db;
          font-size: 15px;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #eeeeee;
          color: #7f8c8d;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Message from Your Portfolio</h1>
        </div>
        
        <div class="content">
          <div class="detail-item">
            <strong>From:</strong>
            <p>${name}</p>
          </div>
          
          <div class="detail-item">
            <strong>Email:</strong>
            <p><a href="mailto:${email}">${email}</a></p>
          </div>
          
          <div class="detail-item">
            <strong>Message:</strong>
            <div class="message-content">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
        </div>
        
        <div class="footer">
          <p>This message was sent via your portfolio contact form.</p>
          <p>© ${new Date().getFullYear()} Mohebulla Miazi Portfolio</p>
        </div>
      </div>
    </body>
    </html>
  `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
