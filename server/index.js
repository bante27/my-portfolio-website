import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// 1. Dynamic PORT for Render (falls back to 5000 in local dev)
const PORT = process.env.PORT || 5000;

// 2. Whitelisted Origins for CORS
const allowedOrigins = [
  "http://localhost:5173",            // Local React (Vite)
  "http://localhost:3000",            // Local React (CRA)
  "http://bantalemmitiku.pro.et",      // Yegara Host HTTP
  "https://bantalemmitiku.pro.et",     // Yegara Host HTTPS
];

// 3. Configure CORS Middleware
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like Postman or mobile apps)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        // Fallback to allow during deployment testing
        callback(null, true);
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

// 4. Health Check Route for Render
app.get("/", (req, res) => {
  res.status(200).send("Backend API is running smoothly on Render!");
});

// 5. Contact API Route
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD, // 16-character Gmail App Password
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.MAIL_USERNAME}>`,
      to: process.env.MAIL_USERNAME,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 15px;">
          <h2>New Message from Portfolio Contact Form</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone || "N/A"}</p>
          <p><b>Message:</b></p>
          <blockquote style="background: #f4f4f4; padding: 10px; border-left: 4px solid #2260FF;">
            ${message}
          </blockquote>
        </div>
      `,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Email sending error:", err);
    res.status(500).json({ message: "Failed to send email" });
  }
});

// 6. Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});