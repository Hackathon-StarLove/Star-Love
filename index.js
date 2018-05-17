const express = require('express')
http = require('http'),
mongoose = require('mongoose'),
hash = require('./pass').hash;
const app = express()

// MIDDLEWARES

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})



// var MongoClient = require('mongodb').MongoClient;

// var uri = "mongodb+srv://kay:myRealPassword@cluster0.mongodb.net/test";
// MongoClient.connect(uri, function(err, client) {
//    const collection = client.db("test").collection("devices");
//    // perform actions on the collection object
//    client.close();
// });

const mongodb = require('mongodb');

// Create seed data

let seedData = [
  {
    decade: '1970s',
    artist: 'Debby Boone',
    song: 'You Light Up My Life',
    weeksAtOne: 10
  },
  {
    decade: '1980s',
    artist: 'Olivia Newton-John',
    song: 'Physical',
    weeksAtOne: 10
  },
  {
    decade: '1990s',
    artist: 'Mariah Carey',
    song: 'One Sweet Day',
    weeksAtOne: 16
  }
];

// Standard URI format: mongodb://[dbuser:dbpassword@]host:port/dbname

let uri = 'mongodb://root:rootroot@ds125680.mlab.com:25680/starlover';

mongodb.MongoClient.connect(uri, function(err, client) {

  if(err) throw err;

  /*
   * Get the database from the client. Nothing is required to create a
   * new database, it is created automatically when we insert.
   */

  let db = client.db('starlover')

  /*
   * First we'll add a few songs. Nothing is required to create the
   * songs collection; it is created automatically when we insert.
   */

  let songs = db.collection('songs');

   // Note that the insert method can take either an array or a dict.

  songs.insert(seedData, function(err, result) {

    if(err) throw err;

    /*
     * Then we need to give Boyz II Men credit for their contribution
     * to the hit "One Sweet Day".
     */

    songs.update(
      { song: 'One Sweet Day' },
      { $set: { artist: 'Mariah Carey ft. Boyz II Men' } },
      function (err, result) {

        if(err) throw err;

        /*
         * Finally we run a query which returns all the hits that spend 10 or
         * more weeks at number 1.
         */

        songs.find({ weeksAtOne : { $gte: 10 } }).sort({ decade: 1 }).toArray(function (err, docs) {

          if(err) throw err;

          docs.forEach(function (doc) {
            console.log(
              'In the ' + doc['decade'] + ', ' + doc['song'] + ' by ' + doc['artist'] +
              ' topped the charts for ' + doc['weeksAtOne'] + ' straight weeks.'
            );
          });

          // Since this is an example, we'll clean up after ourselves.
          songs.drop(function (err) {
            if(err) throw err;

            // Only close the connection when your app is terminating.
            client.close(function (err) {
              if(err) throw err;
            });
          });
        });
      }
    );
  });
});

// 1. Receive email id and password
let password =  req.body.password;
let email =  req.body.email;
// 2. Create hashes
let password2 = sha256(password)
var bcrypt_hash = bcrypt.hashSync(password2, 10);

// 3. Create login token which we return to client
//  maybe using uuid is better...
let login_token = makeid('4') + parseInt(new Date().getTime()).toString(36);
// 4. create hash of login_token which is stored in mongo
const hashed_token = crypto.createHash('sha256').update(login_token).digest('base64');
// 5. we keep hashed tokens to use at the signin
const token_object = {
  'when':new Date(),
  'hashedToken':hashed_token,
};
// 6. create json and insert into mongodb
let insert_params = {
  createdAt: new Date(),
  services:{
    password : {
      bcrypt : bcrypt_hash
    },
    resume : {
      loginTokens : [token_object]
    },
    email : {
      verificationTokens : [
        {
          // nameHash : nameHash,
          address : email,
          when : new Date(),
        }
      ]
    },
  },
  emails : [
    {
      "address" : email,
      "verified" : false
    }
  ],
  profile : {},
}

// ROUTES

app.get('/', (req, res) => {
  res.json('A SUCCESFUL FETCH')
})

// new routes here..


app.listen(3030, () => console.log(`server listening on port: 3030`))