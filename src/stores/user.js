import { defineStore } from 'pinia'
import { auth, usersCollection } from '@/includes/firebase'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false,
    username: auth.currentUser?.displayName ?? 'Anonymous'
  }),
  actions: {
    async register(values) {
      const userCredentials = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password
      )

      const userData = {
        name: values.name,
        email: values.email,
        birthdate: values.birthdate,
        country: values.country,
        phone: values.phone
      }

      // Remove empty optionals fields no need to store in Firestore
      Object.keys(userData).forEach((key) => {
        userData[key] ?? delete userData[key]
      })

      await usersCollection.doc(userCredentials.user.uid).set({
        userData
      })

      await userCredentials.user.updateProfile({
        displayName: values.name
      })

      this.userLoggedIn = true
      this.username = auth.currentUser.displayName
    },
    async authenticate(values) {
      await auth.signInWithEmailAndPassword(values.email, values.password)

      this.userLoggedIn = true
      this.username = auth.currentUser.displayName
    },
    async signOut() {
      await auth.signOut()
      this.userLoggedIn = false
      this.username = 'Anonymous'
    }
  }
})
