import { json, RequestHandler } from "express";
import User from "./User";
import Joi, { object } from "joi";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config";

const schemaRegister = Joi.object({
  name: Joi.string().min(6).max(255).required(),
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(1024).required(),
});
const schemaLogin = Joi.object({
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(1024).required(),
});

export const createUser: RequestHandler = async (req, res) => {
  const { error } = schemaRegister.validate(req.body);
  console.log(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const isEmailExist = await User.findOne({ email: req.body.email });
  if (isEmailExist)
    return res.status(400).json({ error: "Email ya registrado" });

  const salt = await bcrypt.genSalt(10);
  const passEncripted = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: passEncripted,
  });

  try {
    const userDB = await user.save();
    res.json({
      error: null,
      data: userDB,
    });
    console.log("create User");
  } catch (error) {
    res.status(400).json(error);
  }
};

export const login: RequestHandler = async (req, res) => {
  const { error } = schemaLogin.validate(req.body);

  if (error) return res.status(400).json({ error: error.details[0].message });

  const user = await User.findOne({ email: req.body.email });

  if (!user)
    return res
      .status(400)
      .json({ error: true, message: "Email o contraseña invalidas" });

  const userValidate = await bcrypt.compare(
    req.body.password,
    user.get("password")
  );

  if (!userValidate)
    return res
      .status(400)
      .json({ error: true, message: "Email o contraseña invalidas" });
      
  const secret = process.env.TOKEN_SECRET;

  if (secret !== undefined) {
    const token = jwt.sign(
      {
        name: user.get("name"),
        id: user.get("_id"),
      },
      secret.toString()
    );
    res.header("auth-token", token).json({
      error: null,
      data: { token },
    });
    res.json({ user: user, token: token });
  }
};
