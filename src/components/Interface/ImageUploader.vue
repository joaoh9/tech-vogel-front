<template>
  <div>
    <div class="header-image"></div>
    <v-row justify="center">
      <v-dialog v-model="cropPhoto" width="700px">
        <v-card class="pa-6">
          <div class="d-flex justify-space-between mx-6 mb-4">
            <span class="headline">{{ $t('common.imageUpload.cropImage') }}</span>
            <g-btn type="primary" @click="cropImage()" :label="$t('common.imageUpload.crop')" />
          </div>
          <v-card-text>
            <vue-cropper
              class="cropper"
              ref="cropper"
              :aspect-ratio="1 / 1"
              :src="imgSrc"
              preview=".preview"
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <div>
      <input
        id="profilePhoto"
        ref="input"
        type="file"
        :key="form.loading"
        name="image"
        accept="image/*"
        @change="setImage"
        @click="clearInput"
      />
      <div class="add-picture text-center" v-bind:class="{ update: form.image.data64 }">
        <img
          v-if="form.image.data64"
          :src="form.image.data64"
          alt="profilePhoto"
          class="imgProfile"
        />
        <label for="profilePhoto">
          <v-icon color="grey">fa-camera</v-icon>
          <div>{{ message }}</div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';

export default {
  name: 'ImageUploader',
  props: {
    message: String,
    _data64: String,
  },
  mounted() {
    if (this._data64) {
      this.form.image.data64 = this._data64;
      this.loading = !this.loading;
    }
  },
  components: {
    VueCropper,
  },
  data() {
    return {
      imgSrc: '',
      cropPhoto: false,
      form: {
        loading: false,
        image: {
          data64: '',
          name: 'profile',
          size: 0,
          type: 'image/png',
        },
      },
    };
  },
  methods: {
    clearInput() {
      this.$refs.input.value = '';
    },
    cropImage() {
      this.form.image.data64 = this.$refs.cropper
        .getCroppedCanvas({ width: 150, heigth: 150 })
        .toDataURL();

      const file = this.dataURLtoFile(this.form.image.data64, 'profile.png');
      this.form.image.size = file.size;
      this.$emit('image-data', this.form.image);
      this.cropPhoto = false;
    },
    dataURLtoFile(dataurl, filename) {
      const arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]);

      let n = bstr.length;
      const u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }

      return new File([u8arr], filename, { type: mime });
    },
    setImage(e) {
      const file = e.target.files[0];
      if (file.type.indexOf('image/') === -1) {
        return alert(this.$t('common.imageUpload.notImg'));
      }
      if (typeof FileReader === 'function') {
        const reader = new FileReader();
        this.imgSrc = '';
        reader.onload = event => {
          this.imgSrc = event.target.result;
          this.$refs.cropper.replace(event.target.result);
        };
        this.cropPhoto = true;
        reader.readAsDataURL(file);
      }
    },
  },
  watch: {
    'form.image'() {
      this.$emit('image-data', this.form.image);
    },
  },
};
</script>

<style scoped>
.add-picture {
  position: relative;
  width: 128px;
  height: 128px;
  border: 1px solid #e0e0e0;
  border-radius: 50% !important;
  background-color: #fff;
  margin: 0 auto;
}
.add-picture i.v-icon {
  margin-top: 40px !important;
  font-size: 28px !important;
  color: #cfd2df !important;
}
.add-picture div {
  font-size: 14px;
  color: #9ca2be;
  font-weight: 500;
}
.add-picture:hover {
  cursor: pointer;
  border: 1px solid #387bfd;
}
#profilePhoto {
  display: none;
}
.add-picture label[for='profilePhoto'] {
  display: block;
  cursor: pointer;
  position: absolute;
  top: 0px;
  left: 3px;
  background-color: rgb(255 255 255 / 0.9);
  border-radius: 50%;
  height: 122px;
  width: 122px;
}
.add-picture.update label[for='profilePhoto'] {
  display: none;
}
.add-picture.update:hover label[for='profilePhoto'] {
  top: 3px;
  display: block;
}
.cropper {
  max-height: 450px;
}
.imgProfile {
  border-radius: 50%;
  width: 128px;
  box-shadow: 0px 0px 8px #a5a5a5;
}
</style>
