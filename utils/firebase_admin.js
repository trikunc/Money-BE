const admin = require("firebase-admin");


const serviceAccount = JSON.parse(process.env.MANEY_GOOGLE_APPLICATION_CREDENTIALS);

module.exports = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: (process.env.MANEY_FIREBASE_DATABASE)
});


