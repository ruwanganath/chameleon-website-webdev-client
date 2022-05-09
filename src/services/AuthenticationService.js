import Api from '@/services/Api'

export default {
  login (credentials) {
    return Api().post('login', credentials)
  },
  register (credentials) {
    return Api().post('register', credentials)
  },
  forgot (credentials)  {
    return Api().post('forgot', credentials)
  },
}
