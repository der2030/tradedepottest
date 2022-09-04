import request from '@/utils/request'
import { getToken } from '@/utils/auth'

export function listdata() {     
  const token=getToken()
  console.info(token)  
   return request({
     url: '/fblog',
     headers: {
      isToken: true
    },
     method: 'post'
   })
 }

// export function listdata() {     
//    const token=getToken()
//    console.info(token)  
//     return request({
//       url: '/fblog',
//       method: 'post'
//     })
//   }