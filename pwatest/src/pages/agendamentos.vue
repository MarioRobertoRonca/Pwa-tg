<template>
  <div class="q-pa-md q-gutter-sm constrain">
    <!--Button do card-->
    <q-btn label="Medium" color="primary" @click="medium = true" />

    <q-dialog v-model="medium"> 
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">Medium</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <!--Calendário-->
          <div class="q-pa-md">
            <div class="q-gutter-md  row items-start justify-center">
              <q-date v-model="date" :options="optionsFn2" />
          <!--Relógio-->
              <q-time v-model="time3" :options="optionsFnTime3" />
            </div>
         </div>
        </q-card-section>

        <!--Fim-->

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!--Serviços-->
    <div class="q-pa-md " style="max-width: 800px">
      <q-list class="serve" bordered>
        <q-item clickable v-ripple>
          <q-item-section>Corte de cabelo</q-item-section>
          <q-item-section avatar>R$ 20,00</q-item-section>
          <q-item-section avatar>
            <q-btn label="Agendar" color="primary" @click="medium = true" />
          </q-item-section>
        </q-item>

        <q-separator color="primary" spaced />

        <q-item clickable v-ripple>
          <q-item-section>Barba</q-item-section>
          <q-item-section avatar>R$ 20,00</q-item-section>
          <q-item-section avatar>
            <q-btn label="Agendar" color="primary" @click="medium = true" />
          </q-item-section>
        </q-item>

        <q-separator color="primary" spaced />

        <q-item clickable v-ripple>
          <q-item-section>Cabelo + Barba</q-item-section>
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
  data() {
    return {
      medium: false,
      date: "",
      options: [
        "2019/02/01",
        "2019/02/05",
        "2019/02/06",
        "2019/02/09",
        "2019/02/23"
      ],
      time3: '10:56',

      hourOptionsTime1: [ 9, 10, 11, 13, 15 ],
      minuteOptionsTime1: [ 0, 15, 30, 45 ],
      secondOptionsTime1: [ 0, 10, 20, 30, 40, 50 ],
    };
  },

  methods: {
    optionsFn2(date) {
      const parts = date.split("/");
      return parts[2] % 2 === 0;
    },
    optionsFnTime2 (hr, min, sec) {
      if (hr < 6 || hr > 15 || hr % 2 !== 0) {
        return false
      }
      if (min !== null && (min <= 25 || min >= 58)) {
        return false
      }
      if (sec !== null && sec % 25 !== 0) {
        return false
      }
      return true
    },
    optionsFnTime3 (hr) {
      return hr % 2 === 0 || hr % 3 === 0
    },
  }
};
</script>

<style>
.serve {
  border-color: #29e;
  color: white;
  font-size: 16px;
}
</style>
