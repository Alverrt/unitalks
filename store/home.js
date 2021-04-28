export const state = () => ({
  signUp: false,
  login: false
})

export const getters = {
  getSignUpState (state) {
    return state.signUp
  },
  getLoginState (state) {
    return state.login
  }
}

export const mutations = {
  toggle (state) {
    state.signUp = !state.signUp
  },
  toggleLogin (state) {
    state.login = !state.login
  }
}
