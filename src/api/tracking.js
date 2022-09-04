import request from '@/utils/request'

// export function listTracking(consignmentId,storeId,freight_company) {    
//     return request({
//       url: '/api/v1/freight/tracking',
//       headers: {        
//         isToken: true,
//         'Access-Control-Allow-Origin' : '*',
//         'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//       },
//       method: 'get',
//       data: {consignmentId,storeId,freight_company}
//     })
//   }

  export function listTracking(consignmentId,storeId,freight_company) {    
    return request({
      url: '/api/v1/freight/tracking',      
      method: 'get',
      data: {consignmentId,storeId,freight_company}
    })
  }