

<template>
   <div class="layout">
    <el-container  class="container">
      <el-aside class="aside">
        <div class="head">
          <div>           
            <span>TradeDepot</span>
          </div>
        </div>
        <div class="line" />
        <el-menu          
          background-color="#222832"
          text-color="#fff"
          router         
        >
          <el-submenu >
            <el-menu-item-group>
              <el-menu-item index="/datalist"><i class="el-icon-data-line" />DataList</el-menu-item>                       
            </el-menu-item-group>
          </el-submenu>
         
        </el-menu>
      </el-aside>

      <el-container class="content">        
        <div class="main">
        
          <router-view />
        </div>        
      </el-container>      
    </el-container>
 
  </div>
</template>

<script setup>
import { onUnmounted, reactive } from 'vue'
import { getToken } from '@/utils/auth'
import { useRouter } from 'vue-router'

const router=useRouter()

const unwatch = router.beforeEach((to, from, next) => {
      if (to.path == '/login') {        
        next()
      } else {       
        if (!getToken()) {         
          next({ path: '/login' })
        } else {         
          next()
        }
      }

    })

    onUnmounted(() => {
      unwatch()
    })

</script>


<style scoped>
  .layout {
    min-height: 100vh;
    background-color: #ffffff;
  }
  .container {
    height: 100vh;
  }
  .aside {
    width: 200px!important;
    background-color: #222832;
    overflow: hidden;
    overflow-y: auto;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
  }
  .aside::-webkit-scrollbar {
    display: none;
  }
  .head {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
  }
  .head > div {
    display: flex;
    align-items: center;
  }

  .head img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  .head span {
    font-size: 20px;
    color: #ffffff;
  }
  .line {
    border-top: 1px solid hsla(0,0%,100%,.05);
    border-bottom: 1px solid rgba(0,0,0,.2);
  }
  .content {
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    overflow: hidden;
  }
  .main {
    height: calc(100vh - 100px);
    overflow: auto;
    padding: 10px;
  }
</style>

<style>
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .el-menu {
    border-right: none!important;
  }
  .el-submenu {
    border-top: 1px solid hsla(0, 0%, 100%, .05);
    border-bottom: 1px solid rgba(0, 0, 0, .2);
  }
  .el-submenu:first-child {
    border-top: none;
  }
  .el-submenu [class^="el-icon-"] {
    vertical-align: -1px!important;
  }
  a {
    color: #409eff;
    text-decoration: none;
  }
  .el-pagination {
    text-align: center;
    margin-top: 20px;
  }
  .el-popper__arrow {
    display: none;
  }
</style>