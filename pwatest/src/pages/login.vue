<template>
  <q-page class="constrain-more q-pa-md ">
    
    <!--Logo-->
    <div class="q-pa-ma">
      <img class="full-width"
       src="https://lh3.googleusercontent.com/pw/ACtC-3cWlUvueLUYbSQUa_K5Zx87Fju-tYA3hDMH2wqnjsrL51XuzRD3dSyNvZ5IhCm6J0dl6JpX_6aTtLZHYoE8bcFtOA5-w5BtC7lyJTLhGupgAHNIjSM73tb40cPh8wL32c9Znuf8n9mO1FgP6IQd061y=s310-no?authuser=0">

      <!--Icone Tesoura-->
    <div class="row justify-center q-pa-ma">
      <q-btn class="btn-icon" color="primary" icon="eva-scissors-outline" size="lg" round/>
    </div>
    </div>

    

    <!--Formulário de Login -->
      <div class="row justify-center q-ma-md" >
        <!--Input CPF-->
        <q-input class="input" color= "#45e" bg-color="grey-3" filled v-model="text" label= "CPF" >
          <template v-slot:prepend>
            <q-icon name="person"/>
          </template>
        </q-input>

        <!--Input Password-->
        <q-input class="input" color= "#45e" bg-color="grey-3" v-model="password" label ="Senha" filled :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
        <template v-slot:prepend>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      </div>

      <!--Botão de Login-->
      <div class =" row justify-center q-ma-md">
        <q-btn class="button" color="primary" label="Login"/>
      </div>

      <!--Botão Criar Conta-->
      <div class="row justify-center q-ma-md">
        <q-btn to="/createAccount" class="button" color="primary" label="Criar conta"/>
      </div>

      <!--Botão Esqueci minha senha-->
      <div class="row justify-center q-ma-md">
        <q-btn flat class="button" color="primary" label="Esqueci minha senha"/>
      </div>
      
   </q-page>
</template>

<script>
import { uid } from 'quasar'
require('md-gum-polyfill')

export default {
  data () {
    return {
      text:'',
      password: '',
      isPwd: true,
    }
  }
}
</script>




<style>
 .input{
  padding-bottom: 16px;
  width: 300px;
 }

 .button{
   width: 200px;
 }

 .btn-icon{
   margin-bottom: 0;
 }
</style>
