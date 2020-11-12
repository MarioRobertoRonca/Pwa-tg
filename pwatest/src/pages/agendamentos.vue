<template>
  <div>
    <div>
      <div class="q-pa-md  ">
        <q-carousel swipeable animated v-model="slide" thumbnails infinite>
          <q-carousel-slide
            :name="1"
            img-src="https://www.dicasmei.com.br/upload/dicas/8ea7f82bb63771b8bc2f18c963cf6aa3.png"
          />
          
        </q-carousel>
      </div>
    </div>
    <!--Data e Hora de Agendamento-->
    <div class="q-pa-md q-gutter-sm constrain">
      <q-dialog v-model="medium">
        <q-card style="width: 700px; max-width: 80vw">
          <q-card-section>
            <div class="text-h6">Medium</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <!--Calendário-->
            <div class="q-pa-md">
              <div class="q-gutter-md row items-start justify-center">
                <q-date v-model="date" :options="optionsFn2" />
                <!--Relógio-->
                <q-time v-model="time3" :options="optionsFnTime3" />
              </div>
            </div>
          </q-card-section>
          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="OK" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <!--Lista de Serviços-->
      <div class="q-pa-ls" style="max-width: 800px">
        <q-list class="serve" bordered>
          <!--Cortes-->
          <q-item-label header class="list-title">Cortes</q-item-label>

          <q-separator color="primary" spaced />

          <q-item clickable v-ripple>
            <q-item-section>Corte Raspado</q-item-section>
            <q-item-section avatar>R$ 20,00</q-item-section>
            <q-item-section avatar>
              <q-btn label="Agendar" color="primary" @click="medium = true" />
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>Corte Social</q-item-section>
            <q-item-section avatar>R$ 25,00</q-item-section>
            <q-item-section avatar>
              <q-btn label="Agendar" color="primary" @click="medium = true" />
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>Sombrancelha</q-item-section>
            <q-item-section avatar>R$ 10,00</q-item-section>
            <q-item-section avatar>
              <q-btn label="Agendar" color="primary" @click="medium = true" />
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>Pézinho</q-item-section>
            <q-item-section avatar>R$ 10,00</q-item-section>
            <q-item-section avatar>
              <q-btn label="Agendar" color="primary" @click="medium = true" />
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>Corte disfarçado na navalha</q-item-section>
            <q-item-section avatar>R$ 30,00</q-item-section>
            <q-item-section avatar>
              <q-btn label="Agendar" color="primary" @click="medium = true" />
            </q-item-section>
          </q-item>

        <!--Barbas-->
         <q-separator color="primary" spaced />
         <q-item-label header class="list-title" >Barbas</q-item-label>
          <q-separator color="primary" spaced />

          <q-item clickable v-ripple>
            <q-item-section>Barba Simples</q-item-section>
            <q-item-section avatar>R$ 20,00</q-item-section>
            <q-item-section avatar>
              <q-btn label="Agendar" color="primary" @click="medium = true" />
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>Barba Pigmentada</q-item-section>
            <q-item-section avatar>R$ 45,00</q-item-section>
            <q-item-section avatar>
              <q-btn label="Agendar" color="primary" @click="medium = true" />
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>Barba com toalha quente</q-item-section>
            <q-item-section avatar>R$ 30,00</q-item-section>
            <q-item-section avatar>
              <q-btn label="Agendar" color="primary" @click="medium = true" />
            </q-item-section>
          </q-item>

          <!--Químicas-->
         <q-separator color="primary" spaced />
         <q-item-label header class="list-title">Químicas</q-item-label>
          <q-separator color="primary" spaced />

          <q-item clickable v-ripple>
            <q-item-section>Luzes</q-item-section>
            <q-item-section avatar>R$ 25,00</q-item-section>
            <q-item-section avatar>
              <q-btn label="Agendar" color="primary" @click="medium = true" />
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>Tintura</q-item-section>
            <q-item-section avatar>R$ 20,00</q-item-section>
            <q-item-section avatar>
              <q-btn label="Agendar" color="primary" @click="medium = true" />
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>Hidratação</q-item-section>
            <q-item-section avatar>R$ 20,00</q-item-section>
            <q-item-section avatar>
              <q-btn label="Agendar" color="primary" @click="medium = true" />
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>Progressiva</q-item-section>
            <q-item-section avatar>R$ 60,00</q-item-section>
            <q-item-section avatar>
              <q-btn label="Agendar" color="primary" @click="medium = true" />
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>Relaxamento</q-item-section>
            <q-item-section avatar>R$ 35,00</q-item-section>
            <q-item-section avatar>
              <q-btn label="Agendar" color="primary" @click="medium = true" />
            </q-item-section>
          </q-item>
        </q-list>

        <!--Botão confirmar agendamento-->
      <div class="row justify-center q-ma-md">
        <q-btn class="button" color="primary" label="Confirmar agendamento"/>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 1,
      medium: false,
      date: "",
      options: [
        "2019/02/01",
        "2019/02/05",
        "2019/02/06",
        "2019/02/09",
        "2019/02/23",
      ],
      time3: "10:56",

      hourOptionsTime1: [9, 10, 11, 13, 15],
      minuteOptionsTime1: [0, 15, 30, 45],
      secondOptionsTime1: [0, 10, 20, 30, 40, 50],
    };
  },

  methods: {
    optionsFn2(date) {
      const parts = date.split("/");
      return parts[2] % 2 === 0;
    },
    optionsFnTime2(hr, min, sec) {
      if (hr < 6 || hr > 15 || hr % 2 !== 0) {
        return false;
      }
      if (min !== null && (min <= 25 || min >= 58)) {
        return false;
      }
      if (sec !== null && sec % 25 !== 0) {
        return false;
      }
      return true;
    },
    optionsFnTime3(hr) {
      return hr % 2 === 0 || hr % 3 === 0;
    },
  },
};
</script>

<style>
.serve {
  border-color: #29e;
  color: white;
  font-size: 16px;
}
.list-title{
  text-align: center;
  color: #fff;
  font-size: 20px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
.button{
   width: 240px;
   padding: 2px 2px;
   margin: 5px 5px;
 }
</style>
