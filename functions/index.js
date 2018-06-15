const functions = require('firebase-functions');
const firestore = functions.firestore;
const admin = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const auth = require('firebase-functions/lib/providers/auth');
// console.log(auth);

var config = {
  apiKey: 'AIzaSyCdWhf0Qw27cevTZLqc25OSbRizGd-9wGQ',
  projectId: 'oshovatika-3f675',
  authDomain: 'oshovatika-3f675.firebaseapp.com'
};

admin.initializeApp(config);

var db = admin.firestore();
var noti = admin.messaging();


var payload = {
  topic: '/topics/all',
  data: {
    "Nick" : "Mario",
    "body" : "great match!",
    "Room" : "PortugalVSDenmark"
  },
  notification: {
    "title":"Portugal vs. Denmark",
    "body":"great match!"
  }
};
noti.send(payload);
console.log(noti);

/*
db.collection('users').get().then(out => {
  console.log(out);
});
 */
