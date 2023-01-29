import * as dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: "465",
  secure: true,
  auth: {
    user: "luiseducol13@gmail.com",
    pass: process.env.GPASSWORD,
  },
});

export default transporter;
