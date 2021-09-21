/* import external modules */
import axios from 'axios'

/* import internal modules */
import { BASE_URL } from '../config'

export const getMessagesById = (id) => {
  return axios.get(`${BASE_URL}/messages/get_messages?page=${id}`)
}

export const askQuestion = (question) => {
  return axios.post(`${BASE_URL}/messages/ask_question`, question)
}

export const getQuestionSuggestions = () => {
  return axios.get(`${BASE_URL}/messages/question_suggestion`)
}
