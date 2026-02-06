import nodemailer from "nodemailer";

export default async function handler(req, res) {
  console.log("RSVP request method:", req.method);
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  console.log("RSVP request body:", req.body);

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const { name = "" } = body || {};

    if (!name) {
      return res.status(400).json({ error: "Missing name" });
    }

    console.log("Preparing to send RSVP email for:", name);

    const from = process.env.GMAIL_USER;
    const to = "yalisa9414@gmail.com";
    const pass = process.env.GMAIL_APP_PASSWORD;

    console.log("Email configuration - From:", from, "To:", to, "pass", pass);

    if (!from || !to || !pass) {
      return res
        .status(500)
        .json({ error: "Missing GMAIL_USER/GMAIL_APP_PASSWORD/RSVP_TO" });
    }

    const subject = `Nueva confirmación de asistencia - ${name}`;

    const html = `
      <h2>Nueva confirmación de asistencia</h2>
      <p><strong>Nombre:</strong> ${name}</p>
    `;

    console.log("Sending email from:", from, "to:", to);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass,
      },
    });

    console.log("Transporter created, sending mail...");

    await transporter.sendMail({
      from,
      to,
      subject,
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("RSVP email error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
