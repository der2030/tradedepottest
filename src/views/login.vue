<template>
    <div class="login-body">
        <div class="login-container">
            <div class="head">
                <div class="name">
                    <div class="title">TradeDepot Test</div>
                    <div class="tips">Derrick Ye</div>
                </div>
            </div>
            <el-form label-position="top" ref="loginRef"  :model="loginForm" :rules="loginRules" class="login-form">
                <el-form-item label="Username" prop="username">
                    <el-input 
                        v-model="loginForm.username"
                        type="text" 
                        autocomplete="off"
                        placeholder="User Name">
                    </el-input>
                </el-form-item>

                <el-form-item label="Password" prop="password">
                    <el-input 
                    v-model="loginForm.password"
                    type="password"  
                    autocomplete="off"
                    placeholder="Password"
                    @keyup.enter="handleLogin">
                    </el-input>
                </el-form-item>
                <el-checkbox v-model="loginForm.rememberMe" style="margin:0px 0px 25px 0px;">RemeberMe</el-checkbox>
                <el-form-item>                    
                    <el-button style="width: 100%" type="primary" @click.prevent="handleLogin">Login</el-button>                    
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import Cookies from "js-cookie";
import { ref,getCurrentInstance } from "vue";
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
// import axios from 'axios'

import {login}  from '../api/login'


 const store = useStore();
 const router = useRouter();
 const { proxy } = getCurrentInstance();

const loginForm = ref({
  username: "td-freight-test",
  password: "Z6BxGJZQKcYvikSp",
  rememberMe: false
});

const loginRules = {
  username: [{ required: true, trigger: "blur", message: "Please input your name" }],
  password: [{ required: true, trigger: "blur", message: "Please input your password" }]
};

function handleLogin() {

    proxy.$refs.loginRef.validate(valid =>{
        if (loginForm.value.rememberMe) {
                Cookies.set("username", loginForm.value.username, { expires: 30 });
                Cookies.set("password", loginForm.value.password, { expires: 30 });
                Cookies.set("rememberMe", loginForm.value.rememberMe, { expires: 30 });
            } else {
                Cookies.remove("username");
                Cookies.remove("password");
                Cookies.remove("rememberMe");
            }

        // console.info(loginForm.value.username)

        // login(loginForm.value.username,loginForm.value.password).then(res=>{
        //     console.info(res.token)
        // }).catch(error => {
        //       console.info(error)
        //     })

  


        store.dispatch("Login", loginForm.value).then(() => {
                router.push({path:"/datalist" } );
            }).catch(() => {
                console.info("Login failed!")
             
            });
    })
}

</script>


<style scoped>
  .login-body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #fff;
    /* background-image: linear-gradient(25deg, #077f7c, #3aa693, #5ecfaa, #7ffac2); */
  }
  .login-container {
    width: 420px;
    height: 500px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 21px 41px 0px rgba(0, 0, 0, 0.2);
  }
  .head {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0 20px 0;
  }
  .head img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
  }
  .head .title {
    font-size: 28px;
    color: #1BAEAE;
    font-weight: bold;
  }
  .head .tips {
    font-size: 12px;
    color: #999;
  }
  .login-form {
    width: 70%;
    margin: 0 auto;
  }
</style>