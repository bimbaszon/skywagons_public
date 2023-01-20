import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'contact.form.skywagons@gmail.com',
        pass: process.env.password,
    }
  });

  try {
    await transporter.sendMail({
        from: 'contact.form.skywagons@gmail.com',
        to: 'mark@skywagons.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent by: " + req.body.name + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent by: ${req.body.name}</><p>Sent from:
        ${req.body.email}</p>`
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};
