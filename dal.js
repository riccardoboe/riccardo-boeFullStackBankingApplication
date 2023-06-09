const MongoClient = require('mongodb').MongoClient;
const urlMongoDB = "mongodb+srv://riccardoboe:<password>@@cluster0.vkg4nnq.mongodb.net/?retryWrites=true&w=majority";
if(process.env.DEPLOYMENT_MODE==="DEV") url = 'mongodb://localhost:27017';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(urlMongoDB);

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


let collectionName ='users'
const dbName = "capstone-bank";


MongoClient.connect(urlMongoDB, {useUnifiedTopology: true}, function(err, client){
    console.log('connected to mongo!')
    db = client.db(dbName);
    
});    


// create a new user
function create(name, email, password) {
    return new Promise((resolve, reject) => {
        ;
        const document = {name, email, password, balance: 100};
        const collection = db
            .collection(collectionName)
            .insertOne(
                document,
                {w:1},
                function(err, document) {
                err ? reject(err) : resolve(document);
                }
            )
    })
}

function all() {
    return new Promise((resolve, reject) => {
        const allAccounts = db
            .collection(collectionName)
            .find({})
            .toArray(function(err, documents) {
                err ? reject(err) : resolve(documents)
            });
    });

}

function login(email, password) {
    return new Promise((resolve, reject) => {
        const authorizedUser = db
            .collection(collectionName)
            .find({ email: email, password: password})
            .toArray(function(err, document) {
                err ? reject(err) : resolve(document)
            });
    });
}

// update balance
function depositOrWithdraw(email, amount){
    return new Promise((resolve, reject) => {    
        const customers = db
            .collection(collectionName)            
            .findOneAndUpdate(
                {email: email},
                { $inc: { balance: amount}},
                { returnDocument: "after" },
                function (err, document) {
                    err ? reject(err) : resolve(document)
                }
            )       
    });    
}
module.exports = {create, all, login, depositOrWithdraw}
