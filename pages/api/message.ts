import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function message(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.SEND_TO,
      subject: "Portfolio Message",
      text: `Name: ${name},
      Email: ${email},
      message: ${message}
      `,
    });

    res.send({
      message: "Success",
    });
  } catch (error) {
    console.error(error);
  }
}
