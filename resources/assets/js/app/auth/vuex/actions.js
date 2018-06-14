export const register = ({ dispatch }, { payload, context }) => {
  return axios.post('/api/register', payload).then((response) => {
    console.log(response);
  }).catch((error) => {
    context.errors = error.response.data.errors
  })
}

export const login = ({ dispatch }, { payload, context }) => {
  return axios.post('/api/login', payload).then((response) => {
    dispatch('setToken').then(() => {
      console.log('fetch user');
    })
  }).catch((error) => {
    context.errors = error.response.data.errors
  })
}

export const setToken = ({ commit, dispatch }, token) => {
  commit('setToken', token)
}
