<template>
  <div class="q-pa-md">
    <q-carousel
      swipeable
      animated
      arrows
      v-model="slide"
      :fullscreen.sync="fullscreen"
      infinite
    >
      <q-carousel-slide
        :name="1"
        img-src="https://i.ibb.co/gMhvN4q/Banner1.jpg"
      />
      <q-carousel-slide
        :name="2"
        img-src="https://i.ibb.co/3cp76CF/Promo-noivo.jpg"
      />
    </q-carousel>

    <div class="q-pa-md">
      <q-separator color="primary" spaced />
      <h3 class="title">Sobre o Barber Point</h3>
      <p class="corpo">
        O Barber Point é um sistema de agendamentos que permite que o usuário
        arrecade pontos a cada seviço adiquirido na barbearia e futuramente os
        troque por serviços ou produtos oferecidos pela barbearia.
      </p>
      <p class="corpo">
        Com ele é possivel agendar com antecedencia e realizar o pagamento do
        serviço de forma facil.
      </p>
      <p class="corpo">
        Nossa plataforma está disponível na web, Play Store e App Store.
      </p>
      <q-separator color="primary" spaced />

      <!--Objetivo-->
      <h3 class="title">Objetivo</h3>
      <p class="corpo">
        Nosso objetivo é  integrar a tecnologia móvel e web para gestão de agendamento 
        para barbearia, entendendo o lado do cliente que necessita de horários vagos e 
        o proprietário que precisa da cadeira sempre cheia.
      </p>
      <q-separator color="primary" spaced />

      <!--Quem Somos ?-->
      <h3 class="title">Quem Somos?</h3>
      <div class="row">
        <div class="col corpo">
          <q-avatar size="120px" font-size="52px">
            <img src="https://scontent.ffrc6-1.fna.fbcdn.net/v/t31.0-8/19574962_1238165552963127_1762669790515890788_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGsYEvKFcA2_5rYO9gQkf09yeOksJ8emI_J46Swnx6Yj7ZzVy5H-AQUEVq_6p1p9192tROqKyCmGIDMjM0Kv3jn&_nc_ohc=e1mgDpWCthQAX_INgES&_nc_ht=scontent.ffrc6-1.fna&oh=684972fd8ee952eefc7fe2a756b7436f&oe=5FD43803" />
          </q-avatar>
          <p>Mario Roberto Silva Ronca, 22 anos. Estudante de Análise de Desenvolvimento de Sistemas </p>
        </div>
        <div class="col corpo">
            <q-avatar size="120px" font-size="52px">
            <img src="https://scontent.ffrc6-1.fna.fbcdn.net/v/t1.0-9/118372031_2062953883836433_3372659153890938625_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeE_uzjazBXyWmlhwosZ-FbU_-bTSK5Mj0P_5tNIrkyPQ6JnclSL4bevKZ2-epKC4xNDnpU6FvomZtp4O7NI6LnC&_nc_ohc=Z0a31wONZqkAX_ZfR9s&_nc_ht=scontent.ffrc6-1.fna&oh=1c7e02a15c82561843718e5d75942bf0&oe=5FD3A9FA" />
          </q-avatar>
          <p>Paloma Cristina Faria, 20 anos. Estudante de Análise de Desenvolvimento de Sistemas</p>
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
    };
  },
};
</script>

<style>
.title {
  text-align: center;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 26px;
  color: #fff;
}
.corpo {
  color: #eee;
  font-family: Georgia, "Times New Roman", Times, serif;
  text-align: center;
  font-size: 20px;
  padding: 5px 20px;
}
</style>