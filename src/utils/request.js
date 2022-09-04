import axios from 'axios'
import { ElMessage} from 'element-plus'
import { getToken } from '@/utils/auth'


axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const service = axios.create({ 
  baseURL: 'https://freight-api.tradedepottest.com',  
  timeout: 10000
})

// service.interceptors.request.use(config => {
//   const isToken = (config.headers || {}).isToken === false
//   if (getToken() && !isToken) {
//     config.headers['Authorization'] = 'Bearer ' + getToken() 
//   }
// })

service.interceptors.response.use(res => {
    if (typeof res.data!== 'object') {
      ElMessage.error('Server Exception！')
      return Promise.reject(res)
    }
    if (res.data.code!= 200) {
      if (res.data.message) ElMessage.error(res.data.message)
      if (res.data.code == 419) {
        router.push({ path: '/login' })
      }
      return Promise.reject(res.data)
    }  
    return res.data.data
  })

  export default service