import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../utils/database";

//Get all reservations
export default async function GetAll(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { db } = await connect();
    const reservations = await db.collection("reservations").find({}).toArray();
    res.status(200);
    res.json({ reservations });
    return reservations;
  } catch (error) {
    res.status(500);
    res.json({ error: "Unable to get reservations" });
  }
}
