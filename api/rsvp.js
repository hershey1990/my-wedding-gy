import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const {
      name = "",
      email = "",
      guests = "",
      message = "",
      attending = "",
    } = body || {};

    if (!name && !email) {
      return res.status(400).json({ error: "Missing name or email" });
    }

    const from = process.env.RSVP_FROM;
    const to = process.env.RSVP_TO;

    if (!from || !to) {
      return res.status(500).json({ error: "Missing RSVP_FROM or RSVP_TO" });
    }

    const subject = `Nueva confirmación de asistencia - ${name || email}`;

    const html = `
      <h2>Nueva confirmación de asistencia</h2>
      <p><strong>Nombre:</strong> ${name || "-"}</p>
      <p><strong>Email:</strong> ${email || "-"}</p>
      <p><strong>Asistirá:</strong> ${attending || "-"}</p>
      <p><strong>Invitados:</strong> ${guests || "-"}</p>
      <p><strong>Mensaje:</strong> ${message || "-"}</p>
    `;

    await resend.emails.send({
      from,
      to,
      subject,
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error: "Failed to send email" });
  }
}
