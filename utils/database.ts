import { MongoClient, MongoClientOptions, ServerApiVersion } from "mongodb";

const client = new MongoClient(
  process.env.DB_URL as string,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  } as MongoClientOptions
);
async function connect() {
  if (!client.connect()) await client.connect();
  const db = client.db("grooming");
  return { db, client };
}

export { connect };
