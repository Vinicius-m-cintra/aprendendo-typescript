import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = {
  name: "Vinicius",
  email: "vmirandacintra@gmail.com",
};

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail(
      { name: "Vinicius Miranda", email: "vmirandacintra@gmail.com" },
      {
        subject: "Bem-vindo ao typescript",
        body: "Meu primeiro projeto didático utilizando typescript",
      }
    );

    return res.send(201);
  },
};
