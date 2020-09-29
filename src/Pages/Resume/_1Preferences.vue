<template>
  <div>
    <form-input class="mt-6" :title="$t('CV.register.preferences.jobInterests.title')" />
    <div class="d-flex justify-space-between flex-wrap">
      <v-checkbox
        v-model="jobInterests"
        v-on:input="$emit('job-interests', jobInterests)"
        v-for="(option, index) in $t('Data.jobInterests')"
        :key="index"
        :label="option"
        :value="option"
      />
    </div>
    <form-input class="mt-6" :title="$t('CV.register.preferences.jobType.title')" />
    <div class="d-flex justify-space-between flex-wrap">
      <v-checkbox
        v-model="contractType"
        v-on:input="$emit('contract-type', contractType)"
        v-for="(option, index) in $t('Data.contractType')"
        :label="option"
        :value="option"
        :key="index"
      />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Preferences',
  data() {
    return {
      jobInterests: [],
      contractType: [],
    };
  },
};

// INTRODUÇÂO
// olá meu nome é joao henrique, sou aluno de ciencia da computação e nesse video vou mostrar o andamento
// do POC 1, projeto de conclusão de curso que estou fazendo com o adriano césar
// A motivação do projeto surguiu de uma startup que estou criando com uns amigos, que inclusive
// consegui incluir o desenvolvimento do site atrelado a uma matéria aqui da UFMG, a Prática em desenvolvimento de software
// A ideia da startup é ter uma plataforma que conecta profissionais com empresas para trabalho remoto.
// A principio estamos focando apenas nos profissionais desenvolvedores, pois vimos que é um mercado já muito grande
// E que a prática de trabalho remoto já é bem desenvolvida

// MOTIVAÇÂO
// O fluxo hoje é o seguinte: um profissional se cadastra na plataforma, coloca seus dados como experiencia profissional,
// formação acadêmica, e proficiência em linguagens de programação
// Mas visto que essa informação já está disponível em outos lugares, como GitHub e LinkedIn, pensei que seria uma boa
// Automatizar a coleta desses dados via autenticação OAuth e chamadas de API nos respectivos sites.
// Com isso, conseguiremos ter dados mais detalhados sobre o profissional, de uma forma mais rápida e automatizada

// A autenticação para coleta de dados dessas plataformas se dará pelo protocolo de autorização OAuth
// É um protocolo padrão que consiste em 3 etapas:
// Na primeira o usuário é redirecionado para a plataforma de destino, onde ele consegue ver quais tipos de dados
// estarão disponíveis para coleta.
// Após essa primeira autorização, nosso backend faz uma chamada a API do GitHub ou Linkedin, com o código
// recebido na primeira etapa.
// Finalmente, é retornado um access token, que deve ser incluído no cabeçalho das requisiçõe de API para enfim serem feitas as chamadas

// ESTADO ATUAL
// Foi uma curva de aprendizado entender o processo do Oauth e conectar tudo isso de uma forma fluida
// A documentação do GitHub não é tão boa, então estou levando mais tempo que achei que seria necessário
// O que temos hoje são algumas telas prontas na plataforma de conexão, como a de cadastro, login, postagem de job etc
// Da parte do POC diretamente eu começei a integração da Tech Vogel com a API do Github para autenticação OAuth
// <mostrar oauth>

// Próximos passos
// Para os próximos passos, fico por conta de terminar o último passo das requisições e começar a fazer as requisições de API
// Terminando isso para o GitHub creio que a integração com o LinkedIn vai ser mais rápida
// Tenho que fazer o levantamento das rotas que serão utilizadas para as requisições em ambas as plataformas
// Após isso vou fazer um back-end separado do que está sendo atualmente implementado pela Tech Vogel, para não ter confito de código meu com outras pessoas que estão participando do trabalho




</script>

<style></style>


