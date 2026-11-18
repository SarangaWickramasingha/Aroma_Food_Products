import { sendContactEmail } from "../server/contact.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ ok: false, error: "Method not allowed." });
    return;
  }

  const response = await sendContactEmail(req.body ?? {});
  res.status(response.status).json(response.body);
}
