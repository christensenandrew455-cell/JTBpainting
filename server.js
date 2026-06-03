import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use("/styles.css", express.static(path.join(__dirname, "styles.css")));
app.use("/config.js", express.static(path.join(__dirname, "config.js")));
app.use("/scripts.js", express.static(path.join(__dirname, "scripts.js")));
app.use("/contact.js", express.static(path.join(__dirname, "contact.js")));

app.get(["/", "/index.html"], (_req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/contact.html", (_req, res) => {
  res.sendFile(path.join(__dirname, "contact.html"));
});

app.post("/send-email", async (req, res) => {
  try {
    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({
        success: false,
        message: "RESEND_API_KEY is not configured."
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const {
      websiteName = "Website",
      submissionDate = new Date().toLocaleString(),
      firstName = "",
      lastName = "",
      contactMethod = "",
      address = "",
      projectSize = "",
      date = "",
      message = ""
    } = req.body;

    const recipient =
      process.env.RESEND_TO_EMAIL ||
      process.env.CONTACT_TO_EMAIL ||
      "youremail@email.com";

    const fromAddress =
      process.env.RESEND_FROM_EMAIL ||
      "Website Lead <onboarding@resend.dev>";

    await resend.emails.send({
      from: fromAddress,
      to: [recipient],
      subject: `New Lead - ${websiteName}`,
      html: `
        <h1>New Website Lead</h1>
        <hr>
        <h2>Lead Information</h2>
        <p><b>Website:</b> ${websiteName}</p>
        <p><b>Submitted:</b> ${submissionDate}</p>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Contact:</b> ${contactMethod}</p>
        <p><b>Address:</b> ${address}</p>
        <p><b>Project Size:</b> ${projectSize}</p>
        <p><b>Requested Date:</b> ${date}</p>
        <p><b>Message:</b> ${message}</p>
      `
    });

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
