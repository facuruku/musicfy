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

      await auth.currentUser
        .sendEmailVerification()
        .then(async () => {
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
        })
        .catch(() => {
          console.error('Error sending email verification')
        })
    },
    async authenticate(values) {
      await auth
        .signInWithEmailAndPassword(values.email, values.password)
        .then((userCredentials) => {
          if (!userCredentials?.user?.emailVerified) {
            throw new Error('Email not verified')
          }

          this.userLoggedIn = true
          this.username = auth.currentUser.displayName
        })
    },
    async signOut() {
      await auth.signOut()
      this.userLoggedIn = false
      this.username = 'Anonymous'
    },
    async resetPassword(email) {
      await auth.sendPasswordResetEmail(email)
    }
  }
})
