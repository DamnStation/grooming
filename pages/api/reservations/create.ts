import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../utils/database";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { db } = await connect();
    const { name, email, phone, date, time, pets } = req.body;
    const result = await db.collection("reservations").insertOne({
      name,
      email,
      phone,
      date,
      time,
      pets,
      createdAt: new Date(),
    });

    res.status(201);
    res.json({ reservation: result });
  } catch (error) {
    res.status(500);
    res.json({ error: "Unable to insert reservation" });
  }
};
