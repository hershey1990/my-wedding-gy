import { Resend } from "resend";
import { send } from "vite";

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

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM;
    const to = "grlopez90@gmail.com"; //"yalisa9414@gmail.com";

    console.log("Email configuration - From:", from, "To:", to);

    if (!apiKey || !from || !to) {
      return res
        .status(500)
        .json({ error: "Missing RESEND_API_KEY/RESEND_FROM/RESEND_TO" });
    }

    const subject = `Nueva confirmación de asistencia - ${name}`;

    const html = `
      <h2>Nueva confirmación de asistencia</h2>
      <p><strong>Nombre:</strong> ${name}</p>
    `;

    console.log("Sending email from:", from, "to:", to);

    const resend = new Resend(apiKey);

    console.log("Resend client initialized, sending email...", resend);

    const send = await resend.emails.send({
      from,
      to,
      subject,
      html,
    });

    console.log("Email sent successfully:", send);

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("RSVP email error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
