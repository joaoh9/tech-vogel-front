<template>
  <div>
    <v-avatar color="light-gray" size="128">
      <v-img :src="base64" alt="Company" />
    </v-avatar>
    <v-file-input
      v-model="image"
      hide-input
      @change="atFileChange"
    ></v-file-input>
  </div>
</template>

<script>

export default {
  name: 'ImageInput',
  props: {},
  components: {
  },
  data() {
    return {
      image: null,
      imageUrl: null,
      base64: '',
    };
  },
  methods: {
    atFileChange(){
      if (this.image) {
        const fr = new FileReader()
        fr.onload = function(){
          fr.base64 = fr.result;
        };
        fr.readAsDataURL(this.image)
        this.$emit('input', this.image)
      }
    },
  },
};
</script>

