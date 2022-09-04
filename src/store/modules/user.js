import { login } from '@/api/login'
import { getToken, setToken, setExpiresIn, removeToken } from '@/utils/auth'

const user = {

    state: {
        token: getToken()               
      },

      mutations: {
        SET_TOKEN: (state, token) => {
          state.token = token
        }        
      }, 

      actions: {
        // login
        Login({ commit }, userInfo) {
          const username = userInfo.username.trim()
          const password = userInfo.password
          
          return new Promise((resolve, reject) => {
            login(username, password).then(res => {
              let data = res
              console.info(data)
            //   save token to  cookie
              setToken(data.token)
            //   save token to localstorge
              commit('SET_TOKEN', data.token)
              resolve()
            }).catch(error => {
              reject(error)
            })
          })
        }



    }

}

export default user