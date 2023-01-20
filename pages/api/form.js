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
        subject: `Re: ${req.body.title}`,
        text: req.body.title + req.body.message + " | Sent from: " + req.body.email + req.body.number,
        html: `
               <h3>Re: ${req.body.title}</h3>
               <h3>${req.body.message}</h3>
               <h3>${req.body.name}</h3>
               <h3>Sent from: ${req.body.email}</h3>
               <h3>Phone number: ${req.body.number}</h3>`
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};

  