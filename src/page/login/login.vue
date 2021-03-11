<template>
  <div class="login">
      this is login
      <input type="text" v-model="username">
      <input type="password" name="" id="" v-model="password">
      <button type="submit" @click="login">登录</button>
      <button>注册</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            username:'',
            password:''
        }
    },
    methods:{
        login(){
            console.log(this.username,this.password);
        }
    }
}
</script>

<style>
.login{
    width: 200px;
    height: 200px;
    background-color: skyblue;
    text-align: center;
    /* 水平垂直居中 */
    position:absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
}
input{
    margin-top:10px;
}
button{
    margin: auto;
    margin-top: 10px;
    display: inline-block;
}
</style>