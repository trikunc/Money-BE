const admin = require("firebase-admin");

const serviceAccount = JSON.parse(
  process.env.MANEY_GOOGLE_APPLICATION_CREDENTIALS
);

module.exports = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://maney-app-7b3c9-default-rtdb.firebaseio.com",
});
