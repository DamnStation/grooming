const { MongoClient, ServerApiVersion } = require("mongodb");
const { dbUrl } = require("../.env.local");

const uri = dbUrl;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
