import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [{ name: "lucas", email: "carvalholnunes@gmail.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: "Lucas",
        email: "carvalholnunes@gmail.com",
      },
      message: {
        subject: "bem-vindo",
        body: "seja bem-vindo",
      },
    });

    return res.send();
  },
};
