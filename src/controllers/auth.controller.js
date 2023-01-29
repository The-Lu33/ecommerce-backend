import { AuthServices } from "../services/auth.services.js";
// import transporter from "../utils/mailer.js";
import * as dotenv from "dotenv";
import { carService } from "../services/car.services.js";
dotenv.config();
export const register = async (req, res) => {
  try {
    const user = req.body;
    const result = await AuthServices.register(user);
    if (result) {
      await carService.create(result.id);
      res.status(201).json({ message: "user created" });
      // await transporter.sendMail({
      //   from: process.env.EMISORMAILER,
      //   to: result.email,
      //   subject: "Binvenido a la App",
      //   html: `<h1>Binvenido a a la app confirme to email <a href="#" target="new_blank">click aqui</a></h1>`,
      // });
    } else {
      res.status(400).json({ message: "something wrong" });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email && !password) {
      return res.status(400).json([
        {
          error: "missing data",
          message: "not email or password ",
        },
      ]);
    }
    const result = await AuthServices.singin({ email, password });
    if (result.isValid) {
      const { username, email } = result.user;
      const userData = { username, email };
      const tokenn = AuthServices.genToken(userData);
      result.token = tokenn;
      res.json(result);
    } else {
      res.status(400).json({ message: "email or password invalid" });
    }
  } catch (error) {
    res.status(400).json({ message: "something wrong" });
  }
};
