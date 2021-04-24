export const state = () => ({
  signUp: false
})

export const getters = {
  getSignUpState (state) {
    return state.signUp
  }
}

export const mutations = {
  toggle (state) {
    state.signUp = !state.signUp
  }
}
