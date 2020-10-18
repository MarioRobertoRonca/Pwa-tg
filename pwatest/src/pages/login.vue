<template>
  <q-page class=" constrain q-pa-md">
    <div class="camera-frame q-pa-md">
      <img class="full-width"
      src="https://cdn.quasar.dev/img/parallax2.jpg">
    </div>
    <div class="text-center q-pa-md">
      <q-btn color="grey-10" icon="eva-camera" size="lg" round />
      <div class="row justify-center">
        <div class="col-12 col-md-6 q-mt-xl">
          <q-input outlined v-model="text" label="CPF" />
          <div class="col-12 col-md-6 q-mt-md">
            <q-input outlined v-model="text" type="password" label="Senha" />
          </div>
        </div>
      </div>

      <div class="row justify-center q-mt-lg" >
        <q-btn unelevated
          color="primary"
          label="Login"
          rounded
          style="width:200px"
          to="/camera"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageCamera",
};
</script>

<style lang="sass">
.camera-frame
  border: 2px solid $grey-10
  border-radius: 10px
</style>
