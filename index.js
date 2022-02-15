import { MongoClient } from "mongodb";

const url = 'mongodb://localhost:27017';

const client = new MongoClient(url)

const getAllCustomers = async () => {
      await client.connect()
     const db = client.db('Commerce')

     const customerCollection = db.collection('customers')

     const customers = await customerCollection.find({}).toArray()

     console.log(...customers)

     //client.close()// to end connection


}


const createCustomer = async (cust) => {
     await client.connect()
    const db = client.db('Commerce')

    const customerCollection = db.collection('customers')

    const customer = await customerCollection.insertOne(cust)

    console.log(customer)

    //client.close()// to end connection


}

createCustomer({
    id: 3,
    name: "Claire Dorlus",
    email: "claire@dorlus.com"
})
getAllCustomers()
