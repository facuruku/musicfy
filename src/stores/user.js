import { defineStore } from 'pinia'
import { auth, usersCollection } from '@/includes/firebase'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false
  }),
  actions: {
    async register(values) {
      await auth.createUserWithEmailAndPassword(values.email, values.password)

      const userData = {
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country,
        phone: values.phone
      }

      // Remove empty optionals fields no need to store in Firestore
      Object.keys(userData).forEach((key) => {
        if (userData[key] === undefined || userData[key] === null || userData[key] === '') {
          delete userData[key]
        }
      })

      await usersCollection.add({
        userData
      })

      this.userLoggedIn = true
    }
  }
})
