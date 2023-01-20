import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, email, number, title, message } = req.body;
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
        text: req.body.title + req.body.message + " | Sent from: " + req.body.email + req.body.number,
        html: `<h2>${req.body.title}</h2><h2>Description: ${req.body.message}</h2><p>Sent from:
        ${req.body.email}</p>
        <p>Phone number: ${req.body.number}</p>`
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};

  