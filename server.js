import express from 'express';
import {MongoClient} from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';

const app=express();

dotenv.config()

app.use(cors()) 
app.use(express.json())


const PORT = process.env.PORT || 5000
const MONGO_URL = process.env.MONGO_URL;

async function createConnection(){
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is connected");
  return client;
}

const client = await createConnection();

app.get('/', (req, res) =>
  res.send('Welcome to sample API deployment'),
)

app.get('/data', (req, res) =>
  res.send([
    { name: 'Dheeraj', email: 'Dheeraj@gmail.com' },
    { name: 'Raj', email: 'Raj@gmail.com' },
  ]),
)

app.listen(PORT, () => console.log(`Server started in the port ${PORT}`))
