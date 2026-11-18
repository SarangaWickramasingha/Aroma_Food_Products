import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import { sendContactEmail } from "./server/contact.js"

const contactApi = (env) => ({
  name: "contact-api",
  configureServer(server) {
    server.middlewares.use("/api/contact", async (req, res) => {
      if (req.method !== "POST") {
        res.statusCode = 405
        res.setHeader("Allow", "POST")
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify({ ok: false, error: "Method not allowed." }))
        return
      }

      let raw = ""

      try {
        for await (const chunk of req) raw += chunk
        const payload = raw ? JSON.parse(raw) : {}
        const response = await sendContactEmail(payload, {
          ...env,
          ...process.env,
        })

        res.statusCode = response.status
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify(response.body))
      } catch {
        res.statusCode = 400
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify({ ok: false, error: "Invalid request." }))
      }
    })
  },
})

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "")

  return {
    plugins: [react(), tailwindcss(), contactApi(env)],
  }
})
