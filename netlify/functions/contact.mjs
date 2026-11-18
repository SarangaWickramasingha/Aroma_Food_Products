import { sendContactEmail } from "../../server/contact.js";

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { Allow: "POST" },
      body: JSON.stringify({ ok: false, error: "Method not allowed." }),
    };
  }

  let payload = {};

  try {
    payload = event.body ? JSON.parse(event.body) : {};
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ ok: false, error: "Invalid request." }),
    };
  }

  const response = await sendContactEmail(payload);
  return {
    statusCode: response.status,
    body: JSON.stringify(response.body),
  };
};
