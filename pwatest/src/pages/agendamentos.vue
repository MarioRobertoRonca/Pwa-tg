<template>
  <div class="q-pa-md q-gutter-sm constrain">
    <!--Button do card-->
    <q-btn label="Medium" color="primary" @click="medium = true" />

    <q-dialog
      v-model="medium"
    >
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">Medium</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Click/Tap on the backdrop.
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!--Serviços-->
   <div class="q-pa-md " style="max-width: 800px">
    <q-list class="serve" bordered>
      <q-item clickable v-ripple>
        <q-item-section >Corte de cabelo</q-item-section>
        <q-item-section avatar>R$ 20,00</q-item-section>
        <q-item-section avatar>
          <q-btn label="Agendar" color="primary" @click="medium = true" />
        </q-item-section>
      </q-item>

      <q-separator color="primary" spaced />

      <q-item clickable v-ripple>
        <q-item-section >Barba</q-item-section>
        <q-item-section avatar>R$ 20,00</q-item-section>
        <q-item-section avatar>
          <q-btn label="Agendar" color="primary" @click="medium = true" />
        </q-item-section>
      </q-item>

      <q-separator color="primary" spaced />

      <q-item clickable v-ripple>
        <q-item-section >Cabelo + Barba</q-item-section>
        <q-item-section avatar>R$ 35,00</q-item-section>
        <q-item-section avatar>
          <q-btn label="Agendar" color="primary" @click="medium = true" />
        </q-item-section>
      </q-item>
    </q-list>

  </div>

  </div>

</template>


<script>
export default {
  data () {
    return {
      medium: false,
    }
  }
}
</script>

<style>
  .serve{
    border-color: #29e;
    color:white;
    font-size: 16px;
  }
  
</style>