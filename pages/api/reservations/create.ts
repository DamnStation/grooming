import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../utils/database";

interface Reservation {
  name: string;
  date: string;
  time: string;
  phone: string;
  email: string;
  pets: string;
}

export default async function Create(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { db } = await connect();
    const { name, email, phone, date, time, pets }: Reservation = req.body;
    const result = await db.collection("reservations").insertOne({
      name,
      email,
      phone,
      date,
      time,
      pets,
      createdAt: new Date(),
    } as Reservation);

    res.status(201);
    res.json({ reservation: result });
  } catch (error) {
    res.status(500);
    res.json({ error: "Unable to insert reservation" });
  }
}
