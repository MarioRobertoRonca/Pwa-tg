<template>
  <q-page class="constrain-more q-pa-md">
    <div class="camera-frame q-pa-md">
      <img
        class="full-width"
       src="https://lh3.googleusercontent.com/pw/ACtC-3cWlUvueLUYbSQUa_K5Zx87Fju-tYA3hDMH2wqnjsrL51XuzRD3dSyNvZ5IhCm6J0dl6JpX_6aTtLZHYoE8bcFtOA5-w5BtC7lyJTLhGupgAHNIjSM73tb40cPh8wL32c9Znuf8n9mO1FgP6IQd061y=s310-no?authuser=0">
      <canvas
      v-show="imageCaptured"
      ref="canvas"
      class="full-width"
      height="240"
      />
    </div>
    <div class="text-center q-pa-md">
      <q-btn
        color="grey-10"
        icon="eva-scissors-outline"
        size="lg"
        round
      />


      <div class="row justify-center q-ma-md">
        <q-input
          v-model="CPF"
          class="col col-sm-6"
          label="CPF"
          dense
        />
      </div>
      <div class="row justify-center q-ma-md">
        <q-input
          v-model="senha"
          class="col col-sm-6"
          type="password"
          label="Senha"
          dense
        >
          <template v-slot:append>
            <q-btn
              icon="eva-navigation-2-outline"
              round
              dense
              flat
               />
          </template>
        </q-input>
      </div>
      <div class="row justify-center q-ma-lg">
        <q-btn
          unelevated
          color="primary"
          label="Login"
          rounded
        />
      </div>
      <div class="row justify-center q-mt-lg">
        <q-btn
          unelevated
          color="primary"
          label="Inscreva-se"
          rounded
        />
      </div>

    </div>
  </q-page>
</template>

<script>
import { uid } from 'quasar'
require('md-gum-polyfill')

export default {
  name: 'PageCamera',
  data() {
    return {
      post:{
        id: uid(),
        caption: '',
        location: '',
        photo: null,
        date: Date.now()
      },
      imageCaptured: false,
      imageUpload: [],
      hasCameraSupport: true
    }
  },

  methods: {
    initCamera() {
      navigator.mediaDevices.getUserMedia({
        video: true
      }).then(stream => {
        this.$refs.video.srcObject = stream
      }).catch(error => {
        this.hasCameraSupport = false
      })
    },
    captureImage(){
      let video = this.$refs.video
      let canvas = this.$refs.canvas
      canvas.width = video.getBoundingClientRect().width
      canvas.width = video.getBoundingClientRect().height
      let context = canvas.getContext('2d')
      context.drawImage(video, 0, 0, canvas.width, canvas.height)
      this.imageCaptured = true
      this.post.photo = this.dataURItoBlob(canvas.toDataURL())
    },
    captureImageFallback(file){
        console.log('file', file)
    },
    dataURItoBlob(dataURI) {
      // convert base64 to raw binary data held in a string
      // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
      var byteString = atob(dataURI.split(',')[1]);

      // separate out the mime component
      var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

      // write the bytes of the string to an ArrayBuffer
      var ab = new ArrayBuffer(byteString.length);

      // create a view into the buffer
      var ia = new Uint8Array(ab);

      // set the bytes of the buffer to the correct values
      for (var i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
      }

      // write the ArrayBuffer to a blob, and you're done
      var blob = new Blob([ab], {type: mimeString});
      return blob;

    }
  },
  mounted() {
    this.initCamera()
  }
}
</script>

<style lang="sass">
    .camera-frame
      border: 2px solid $grey-10
      border-radius: 10px
</style>
