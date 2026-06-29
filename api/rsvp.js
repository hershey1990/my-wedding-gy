import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Ingresa tu nombre"),
  phone: z
    .string()
    .trim()
    .min(1, "Ingresa tu teléfono")
    .regex(/^[0-9+()\-\s]{7,}$/, "Ingresa un teléfono válido"),
});

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

    const validation = schema.safeParse(body);
    if (!validation.success) {
      const errors = validation.error.flatten().fieldErrors;
      return res
        .status(400)
        .json({ error: errors.name?.[0] || errors.phone?.[0] || "Datos inválidos" });
    }

    const { name, phone } = validation.data;

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM;
    const to = "grlopez90@gmail.com";

    if (!apiKey || !from) {
      return res.status(500).json({ error: "Missing RESEND_API_KEY/RESEND_FROM" });
    }

    const subject = `Nueva confirmación de asistencia - ${name}, Teléfono: ${phone}`;

    const html = `
      <h2>Nueva confirmación de asistencia</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Teléfono:</strong> ${phone}</p>
    `;

    const resend = new Resend(apiKey);
    const send = await resend.emails.send({ from, to, subject, html });

    if (send.error) {
      console.error("Failed to send RSVP email:", send);
      return res.status(500).json({ error: "Failed to send email" });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("RSVP email error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
