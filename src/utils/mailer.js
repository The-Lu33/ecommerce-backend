import * as dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";
import path from "path";
import hbs from "nodemailer-express-handlebars";
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: "587",
  secure: false,
  auth: {
    user: "luiseducol13@gmail.com",
    pass: process.env.GPASSWORD,
  },
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
});
const handlebarOptions = {
  viewEngine: {
    extName: ".handlebars",
    partialsDir: path.resolve("./src/views"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./src/views"),
  extName: ".handlebars",
};
transporter.use("compile", hbs(handlebarOptions));

export default transporter;
