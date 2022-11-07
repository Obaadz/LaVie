import type { NextApiRequest, NextApiResponse } from "next";
import { connectMongo } from "../../../connectMongo";
import { Users } from "../../../models/Schemas";

connectMongo();

type User = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

type Message = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      await handlePostMethod(req, res);
      break;
    default:
      await handleError(req, res);
  }

  res.end();
}

async function handlePostMethod(
  req: NextApiRequest,
  res: NextApiResponse<Message>
) {
  const RES_DATA = {
    message: "",
    status: 201,
  };
  const userData: User = req.body;

  const newUser = new Users({
    first_name: userData.first_name,
    last_name: userData.last_name,
    email: userData.email,
    password: userData.password,
  });

  await newUser
    .save()
    .then(() => {
      RES_DATA.message = "USER HAS BEEN SAVED";
      RES_DATA.status = 201;
    })
    .catch(() => {
      RES_DATA.message = "ERROR OCCURED ON SAVING USER";
      RES_DATA.status = 405;
    });

  res.status(RES_DATA.status).send({ message: RES_DATA.message });
}

async function handleError(req: NextApiRequest, res: NextApiResponse<Message>) {
  res.status(405).send({ message: "THIS REQUEST IS NOT ALLOWED" });
}
