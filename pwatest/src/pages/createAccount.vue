<template>
  <div class="q-gutter-md q-px-lg">
    <div class="constrain-more-avatar q-pa-xl justify-center">
      <q-avatar size="150px">
        <img
          style="position: center"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaj0ucKVpTNbey2YUj2f0V_MDQ1G6jBiwt2w&usqp=CAU"
        />
      </q-avatar>
    </div>

    <!--Formulário de Cadastro -->
    <!--Nome Completo-->
    <div class="row justify-center q-ma-md">
      <q-input class="input" color= "#45e" bg-color="grey-3" filled v-model="text" :dense="dense" label= "Nome Completo" >
          <template v-slot:prepend>
            <q-icon name="person"/>
          </template>
        </q-input>

    <!--CPF-->
        <q-input class="input" color= "#45e" bg-color="grey-3" filled v-model="text" :dense="dense" label= "CPF" >
          <template v-slot:prepend>
            <q-icon name="person"/>
          </template>
        </q-input>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      ph: '',

      dense: false
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
</style>
