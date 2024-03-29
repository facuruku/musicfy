import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyARoJhMNEPSXdWy5m1-CNhA6lvkRApVg0o',
  authDomain: 'musicfy-53b66.firebaseapp.com',
  projectId: 'musicfy-53b66',
  storageBucket: 'musicfy-53b66.appspot.com',
  //messagingSenderId: '349325047458',
  appId: '1:349325047458:web:98dca1dbd405cc352bc9fb'
  //measurementId: 'G-JKG974JFM4'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const { FieldValue } = firebase.firestore

db.enablePersistence().catch((err) => {
  console.log(`Persistence error ${err.code}`)
})

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export { auth, db, usersCollection, songsCollection, commentsCollection, storage, FieldValue }
