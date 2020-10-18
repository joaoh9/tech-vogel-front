<template>
  <div>
    <v-avatar color="light-gray" size="128">
      <v-img :src="base64" alt="Company" />
    </v-avatar>
    <v-file-input v-model="image" hide-input @change="handleFileUpload" />
  </div>
</template>

<script>
const MB = 1000000;
const MAX_FILE_SIZE = 10 * MB;
export default {
  name: 'ImageInput',
  data() {
    return {
      image: null,
      imageUrl: null,
      base64: '',
    };
  },
  methods: {
    handleFileUpload(e) {
      e.target.files.forEach(file => {
        if (file.size > MAX_FILE_SIZE) {
          this.$toast.e(`Arquivo ${file.name} exceede limite de ${MAX_FILE_SIZE / MB}MB`);
          return;
        }
        this.processDocument(file);
      });
    },
    getBase64(file) {
      return new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
      });
    },
    processDocument(file) {
      this.getBase64(file)
        .then(data => {
          this.event.files.push({
            data64: data,
            fileSize: file.size.toString(),
            mimeType: file.type,
            fileName: file.name,
          });
          return;
        })
        .catch(() => {
          this.$toast.e(`Houve algo de errado ao processar o arquivo ${file.name}`);
        });
    },
  },
};
</script>
