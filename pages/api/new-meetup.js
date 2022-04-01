import { MongoClient } from "mongodb";

async function NewMeetup(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://khosro35:mohammad19035039@cluster0.gfww0.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const results = await meetupsCollection.insertOne(data);

    console.log(results);

    client.close();

    res.status(201).json({ message: "Meetup inserted successfully!" });
  }
}

export default NewMeetup;
