const admin = require("firebase-admin");


const serviceAccount = JSON.parse(process.env.MONSY_GOOGLE_APPLICATION_CREDENTIALS);

module.exports = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dev-monsy.firebaseio.com"
});


