import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, service, message } = body;

  // Server-side validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 }
    );
  }

  const {
    SMTP_HOST = "smtp.gmail.com",
    SMTP_PORT = "465",
    SMTP_USER,
    SMTP_PASS,
    MAIL_TO = "ShaanWocker@gmail.com",
    MAIL_FROM,
  } = process.env;

  if (!SMTP_USER || !SMTP_PASS) {
    console.error("SMTP credentials are not configured.");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 503 }
    );
  }

  const port = parseInt(SMTP_PORT, 10);
  const secure = port === 465;

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const fromAddress = MAIL_FROM ?? `"Cape Cruz Tours & Transport" <${SMTP_USER}>`;

  const serviceLabel = service ? `Service Type: ${service}\n` : "";
  const phoneLabel = phone ? `Phone: ${phone}\n` : "";

  const textBody = `New contact form submission from Cape Cruz website:\n\nName: ${name}\nEmail: ${email}\n${phoneLabel}${serviceLabel}\nMessage:\n${message}`;

  const htmlBody = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
      <h2 style="color:#009688">New Enquiry – Cape Cruz Tours &amp; Transport</h2>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px;font-weight:bold;width:120px">Name</td><td style="padding:8px">${name}</td></tr>
        <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
        ${phone ? `<tr><td style="padding:8px;font-weight:bold">Phone</td><td style="padding:8px">${phone}</td></tr>` : ""}
        ${service ? `<tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Service</td><td style="padding:8px">${service}</td></tr>` : ""}
        <tr><td style="padding:8px;font-weight:bold;vertical-align:top">Message</td><td style="padding:8px;white-space:pre-wrap">${message}</td></tr>
      </table>
      <p style="color:#888;font-size:12px;margin-top:20px">Sent from the Cape Cruz website contact form.</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: fromAddress,
      to: MAIL_TO,
      replyTo: email,
      subject: `New Enquiry from ${name} – Cape Cruz Tours & Transport`,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Failed to send email:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
