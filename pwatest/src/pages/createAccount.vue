<template>
  <div class="q-gutter-md q-px-lg">
    <div class="constrain-more-avatar q-pa-xl justify-center">
      <q-avatar size="150px">
        <img
          style="position: center"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaj0ucKVpTNbey2YUj2f0V_MDQ1G6jBiwt2w&usqp=CAU"
        />
      </q-avatar>
      <h5 style="text-algin:center; color: #fff; margin:top ">Crie sua conta</h5>
    </div>

    <!--Formulário de Cadastro - Linha 1-->
    <!--Nome Completo-->
    <div class="row justify-center q-ma-md">
      <q-input class="input" color= "#45e" bg-color="grey-3" filled v-model="text" :dense="dense" label= "Nome Completo" >
          <template v-slot:prepend>
            <q-icon name="person"/>
          </template>
        </q-input>

    <!--CPF-->
        <q-input class="input" color= "#45e" bg-color="grey-3" filled v-model="text" :dense="dense" label= "CPF" mask="###.###.###-##" hint="###.###.###-##">
          <template v-slot:prepend>
            <q-icon name="topic"/>
          </template>
        </q-input>
    </div>

    <!--Linha 2 do formulário-->
    
    <div class="row justify-center q-ma-md">
    <!--Data de Nascimento-->
        <q-input class="input" color= "#45e" bg-color="grey-3" filled v-model="date"  type="date" hint="Native date" >
          <template v-slot:prepend>
            <q-icon name="event" />
          </template>
        </q-input>

      <!--E-mail-->
      <q-input class="input" color= "#45e" bg-color="grey-3" filled v-model="email" :dense="dense" type="email" label="E-mail" >
          <template v-slot:prepend>
            <q-icon name="mail" />
          </template>
        </q-input>
    </div>

    <!--Linha 3 do formulário-->
    <div class="row justify-center q-ma-md">
    <!--Senha-->
      <q-input class="input" color= "#45e" bg-color="grey-3" v-model="password" label ="Senha" filled :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
        <template v-slot:prepend>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

    <!--Confirmação de Senha-->
      <q-input class="input" color= "#45e" bg-color="grey-3" v-model="password" label ="Confirmação de senha" filled :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
        <template v-slot:prepend>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
    </div>

    <!--Linha 4 do formulário-->
    <!--Endereço-->
      <div class="row justify-center q-ma-md">
      <q-input class="input" color= "#45e" bg-color="grey-3" filled v-model="text" :dense="dense" label= "Endereço" >
          <template v-slot:prepend>
            <q-icon name="local_convenience_store"/>
          </template>
        </q-input>

    <!--Bairro-->
        <q-input class="input" color= "#45e" bg-color="grey-3" filled v-model="text" :dense="dense" label= "Bairro" >
          <template v-slot:prepend>
            <q-icon name="local_offer"/>
          </template>
        </q-input>
    </div>

    <!--Linha 5 do formulário-->
    <!--Nº-->
      <div class="row justify-center q-ma-md">
      <q-input class="input-small-s" color= "#45e" bg-color="grey-3" filled v-model="text"  type = "Number" :dense="dense" label= "Nº" >
          <template v-slot:prepend>
            <q-icon name="filter_1"/>
          </template>
        </q-input>

    <!--Complemento-->
        <q-input class="input-small" color= "#45e" bg-color="grey-3" filled v-model="text" :dense="dense" label= "Complemento" >
          <template v-slot:prepend>
            <q-icon name="apartment"/>
          </template>
        </q-input>

    <!--Cidade-->
        <q-input class="input-small" color= "#45e" bg-color="grey-3" filled v-model="text" :dense="dense" label= "Cidade" >
          <template v-slot:prepend>
            <q-icon name="satellite"/>
          </template>
        </q-input>

    <!--Estado-->
        <q-input class="input-small-s" color= "#45e" bg-color="grey-3" filled v-model="text" :dense="dense" label= "Estado" >
          <template v-slot:prepend>
            <q-icon name="local_play"/>
          </template>
        </q-input>
    </div>

    <!--Linha 6 do formulário-->
    <!--CEP-->
    <div class="row justify-center q-ma-md">
      <q-input class="input" color= "#45e" bg-color="grey-3" filled v-model="text" :dense="dense" label= "CEP" >
          <template v-slot:prepend>
            <q-icon name="location_on"/>
          </template>
        </q-input>

    <!--Telefone-->
        <q-input class="input-tell" color= "#45e" bg-color="grey-3" filled v-model="phone" label="Telefone" mask="(##) #### - ####" hint="Mask: (##) #### - ####">
          <template v-slot:prepend>
            <q-icon name="phone"/>
          </template>
        </q-input>

        <!--Celular-->
        <q-input class="input-cell" color= "#45e" bg-color="grey-3" v-model="phone" filled  label="Celular" mask="(##) ##### - ####" hint="Mask: (##) ##### - ####">
          <template v-slot:prepend>
            <q-icon name="phonelink_ring"/>
          </template>
        </q-input>
    </div>

    <!--Botão Criar Conta-->
      <div class="row justify-center q-ma-md">
        <q-btn to="/#" class="button" color="primary" label="Criar conta"/>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      phone: null,
      password: '',
      isPwd: true,
      dense: false,
      email: '',
      number: null,
      tel: '',
      date: ''
    }
  }
}
</script>

<style>
.input {
  padding-bottom: 16px;
  padding: 16px;
  width: 400px;
}
.input-small {
  padding-bottom: 16px;
  padding: 16px;
  width: 250px;
}
.input-small-s {
  padding-bottom: 16px;
  padding: 16px;
  width: 150px;
}
.input-tell {
  padding-bottom: 16px;
  padding: 16px;
  width: 200px;
}
.input-cell {
  padding-bottom: 16px;
  padding: 16px;
  width: 205px;
}
.button{
  width: 200px;
  margin: 10px 40px;
 }
</style>
