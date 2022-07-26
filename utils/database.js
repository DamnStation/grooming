import { MongoClient, ServerApiVersion } from "mongodb";

const client = new MongoClient(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function connect() {
  if (!client.isConnected()) await client.connect();
  const db = client.db("grooming");
  return { db, client };
}

export { connect };
