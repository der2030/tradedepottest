import request from '@/utils/request'

// export function login(username, password) {    
//     return request({
//       url: '/login',
//       headers: {
//         isToken: false
//       },      
//       method: 'post',
//       params: { username, password}
//     })
//   }

  export function login(username, password) {    
    return request({
      url: '/login',      
      method: 'post',
      params: { username, password}
    })
  }  

