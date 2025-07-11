import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { email, name, amount, vin } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const emailTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              margin: 0;
              padding: 0;
            }
            .email-container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(to right, #6320ee, #8075ff);
              padding: 30px 20px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .header h1 {
              color: white;
              margin: 0;
              font-size: 24px;
            }
            .content {
              background: #ffffff;
              padding: 30px 20px;
              border-radius: 0 0 10px 10px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .amount {
              font-size: 32px;
              font-weight: bold;
              color: #6320ee;
              text-align: center;
              margin: 20px 0;
            }
            .details {
              background: #f8f9fa;
              padding: 20px;
              border-radius: 8px;
              margin: 20px 0;
            }
            .details p {
              margin: 10px 0;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              color: #666;
              font-size: 14px;
            }
            .button {
              display: inline-block;
              padding: 12px 24px;
              background: linear-gradient(to right, #6320ee, #8075ff);
              color: white;
              text-decoration: none;
              border-radius: 5px;
              font-weight: bold;
              margin: 20px 0;
            }
            .divider {
              height: 1px;
              background: #eee;
              margin: 20px 0;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <h1>Payment Confirmation</h1>
            </div>
            <div class="content">
              <p>Dear ${name},</p>
              <p>Thank you for your purchase! Your payment has been successfully processed.</p>
              
              <div class="amount">
                $${(amount).toFixed(2)}
              </div>
              
              <div class="details">
                <p><strong>Order Details:</strong></p>
                <p>Vehicle History Report for VIN: ${vin}</p>
                <p>Date: ${new Date().toLocaleDateString()}</p>
              </div>

              <div style="text-align: center;">
                <h2>Your report will be delivered within 24 hours to this email address.</h2>
              </div>

              <div class="divider"></div>

              <div class="footer">
                <p>Need help? Contact us at marie@4wheelscar.com</p>
                <p>© ${new Date().getFullYear()} Vehicle Record. All rights reserved.</p>
                <p>1901 8th Avenue Tuscaloosa, AL 35401</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: [email, "petermarshall865@gmail.com"],
      subject: "Payment Confirmation - Vehicle History Report",
      html: emailTemplate,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send confirmation email" },
      { status: 500 }
    );
  }
} 