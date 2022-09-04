
<template>
     <el-card class="order-container">
        <el-table
            v-loading="loading"
            
            tooltip-effect="dark"
            style="width: 100%"
            >
            <el-table-column
                prop="id"
                label="id"
            >
            </el-table-column>

            <el-table-column
                prop="trackingNumber"
                label="trackingNumber"
            >
            </el-table-column>

            <el-table-column
                prop="storeid"
                label="storeid"
            >
            </el-table-column>

             <el-table-column
                prop="orderCompany"
                label="orderCompany"
            >
            </el-table-column>

            <el-table-column
                prop="orderShippingFee"
                label="orderShippingFee"
            >
            </el-table-column>
             <el-table-column
                prop="orderWeight"
                label="orderWeight"
            >
            </el-table-column>

            <el-table-column
                label="Operation"
            >
               <template #default="scope">
                 <el-button >Tracking</el-button>                 
               </template>
             
            </el-table-column>

        </el-table>
     </el-card>
</template>

<script setup>
import { onMounted, reactive, ref, toRefs } from 'vue'
import { ElMessage } from 'element-plus'
import {listdata} from '../api/datalist'

onMounted(() => {
      getOrderList()
    })

 const getOrderList = () => {

    console.info("hello")

    listdata().then(res=>{
        console.info(res)
    }).catch(err=>{
        console.info(err)
    })

 }   


</script>



<style scoped>
  .order-container {
    min-height: 100%;
  }
  .el-card.is-always-shadow {
    min-height: 100%!important;
  }
</style>