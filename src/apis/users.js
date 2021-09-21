/* import external modules */
import 'firebase/auth'
import axios from 'axios'
import 'firebase/firestore'
import firebase from 'firebase/app'

/* import internal modules */
import { BASE_URL } from '../config'

export const signUpWithEmailPassword = (userFormData) => {
  return axios.post(`${BASE_URL}/user/register`, userFormData)
}

export const signInWithEmailPassword = (userFormData) => {
  return axios.post(`${BASE_URL}/user/login`, userFormData)
}

export const logout = () => {
  return axios.post(`${BASE_URL}/user/logout`)
}

export const addInterests = (interestsFormData) => {
  return axios.post(`${BASE_URL}/user/add_interests`, interestsFormData)
}

export const createUserFirestore = (data) => {
  return firebase.firestore().collection('users').add(data)
}

export const sendPasswordReset = (email) => {
  return firebase.auth().sendPasswordResetEmail(email)
}

export const authStateListener = () => {
  let user = null

  firebase.auth().onAuthStateChanged((userAuth) => {
    if (userAuth) {
      user = userAuth
    }
  })

  return user
}
