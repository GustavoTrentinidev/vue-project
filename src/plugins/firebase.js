import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCP4SrcH8nytwXD-16HC5bwkWPEuia873Q",
    authDomain: "todo-list-vue-17b04.firebaseapp.com",
    projectId: "todo-list-vue-17b04",
    storageBucket: "todo-list-vue-17b04.appspot.com",
    messagingSenderId: "525134849465",
    appId: "1:525134849465:web:b7a1a99c1ebd7c29d64268"
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export {
    db, auth, profileCollection, tasksCollection
}