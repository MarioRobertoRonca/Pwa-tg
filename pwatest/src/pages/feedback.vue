<template>
  <div class=" q-gutter-md q-px-lg">
    <!--Carousel Feedback-->
    <div class="q-px-lg q-pt-md">
      <q-carousel swipeable animated v-model="slide" thumbnails infinite>
        <q-carousel-slide
          :name="1"
          img-src="https://www.belasis.com.br/wp-content/uploads/2018/06/aumentar-as-vendas-na-barbearia-1024x683.jpg"
        />
        <q-carousel-slide
          :name="2"
          img-src="https://sialcursos.com.br/wp-content/uploads/2019/11/curso-barbeiro-2-1000x500.png"
        />
        <q-carousel-slide
          :name="3"
          img-src="https://i.mlcdn.com.br/portaldalu/fotosconteudo/54754.jpg"
        />
      </q-carousel>

      <!--Feedback-->
      <q-list bordered padding class="constrain rounded-borders" style="min-width: 350px">
      <!--ATENDIMENTO-->
        <q-separator color="grey-7" spaced />
        <q-section class="avaliation">
          <q-label>Como você se sente em relação ao nosso atendimento?</q-label>
          <div class="q-pa-md">
            <div class="q-gutter-y-sm">
              <q-rating
                v-model="ratingModel"
                :max="4"
                size="3.5em"
                color="primary"
                :icon="icons"
              />
            </div>
          </div>
        </q-section>

        <!--LOCAL-->
        <q-separator color="grey-7" spaced />
        <q-section class="avaliation">
          <q-label>Como você se sente em relação ao nosso local de trabalho?</q-label>
          <div class="q-pa-md">
            <div class="q-gutter-y-sm">
              <q-rating
                v-model="ratingModel"
                :max="4"
                size="3.5em"
                color="primary"
                :icon="icons"
              />
            </div>
          </div>
        </q-section>

        <!--SERVIÇO-->
        <q-separator color="grey-7" spaced />
        <q-section class="avaliation">
          <q-label>Como você se sente em relação ao nosso trabalho?</q-label>
          <div class="q-pa-md">
            <div class="q-gutter-y-sm">
              <q-rating
                v-model="ratingModel"
                :max="4"
                size="3.5em"
                color="primary"
                :icon="icons"
              />
            </div>
          </div>
        </q-section>
        <q-separator color="grey-7" spaced />
      </q-list>

      <!--Avaliação-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 1,
      ratingModel: 0,
      icons: [
        "sentiment_very_dissatisfied",
        "sentiment_dissatisfied",
        "sentiment_satisfied",
        "sentiment_very_satisfied"
      ]
    };
  }
};
</script>

<style>
.avaliation {
  color: white;
  font-size: 16px;
}
</style>
