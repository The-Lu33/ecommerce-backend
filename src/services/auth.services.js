import { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();
import {users} from "../models/index.js";
// const { users } = models;

export class AuthServices {
  static async register(user) {
    try {
      const result = await users.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async singin(credentials) {
    try {
      const { email, password } = credentials;

      const user = await users.findOne({ where: { email } });

      if (user) {
        const isValid = compareSync(password, user.password);

        return isValid ? { isValid, user } : { isValid };
      } else {
        return (isValid = false);
      }
    } catch (error) {
      throw error;
    }
  }
  static genToken(data) {
    try {
      const token = jwt.sign(data, process.env.JWTSECRET, {
        expiresIn: "24hrs",
        algorithm: "HS512",
      });
      return token;
    } catch (error) {
      throw error;
    }
  }
}
