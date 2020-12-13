<template>
  <job-description :job="job" :company="company"></job-description>
</template>

<script>
import JobDescription from 'Pages/Job/JobDetails';

export default {
  name: 'UseMobileAndroidPleno',
  components: {
    JobDescription,
  },
  data: () => ({
    job: {
      title: 'Desenvolvedor(a) Android - Pleno',
      description:
        '<h5><strong>O que você fará em seu dia a dia:</strong></h5><p><br></p><p>Você atuará no desenvolvimento e manutenção de aplicativos Android nativos, trabalhando junto com equipes de desenvolvimento bem como a equipe de design na entrega de novas funcionalidades e correções/melhorias em projetos.</p><h5><br></h5><h5><strong>Requisitos ideais:</strong></h5><ul><li>Experiência com desenvolvimento em Kotlin;</li><li>Experiência com o padrão de arquitetura MVVM&nbsp;</li><li>Experiência com gerenciadores de dependências (Gradle);</li><li>Git / GitFlow;</li><li>Experiência com publicação na Google Play;</li><li>Experiência com os componentes JetPack e suas principais bibliotecas (Navigation, Lifecycles, ViewModel, LiveData, Room, etc.)</li><li>Experiência com Frameworks de comunicação Http (Retrofit);</li><li>Experiência com integração do Firebase (Crashlytics, App Distribution, Analytics, Database, etc.)&nbsp;</li><li>Experiência com Code Review</li></ul><h5><br></h5><h5><strong>Diferenciais:</strong></h5><ul><li>Experiência com ferramentas de CI/CD;</li><li>Conhecimento dos princípios SOLID;</li><li>Conhecimento de Design Patterns;</li><li>Experiência com testes unitários;</li><li>Experiência com o Clean Architecture</li><li>Conhecimento sobre práticas de segurança voltadas ao desenvolvimento Android;</li><li>Experiência com projetos modularizados e dynamic features;</li><li>Conhecimento de práticas DevOps</li><li>Experiência com código legado (Legacy Code);</li><li>Conhecimentos de desenvolvimento em Flutter;</li></ul><p><br></p><p><strong>Carga horária:&nbsp;</strong>40h semanais sob regime CLT.</p><p><br></p><p><strong>Local:</strong>&nbsp;Ouro Preto – MG.</p><h4><br></h4><h4><em>Enviar email com o título da vaga no assunto para:</em></h4><p><a href="mailto:vempara@usemobile.xyz" rel="noopener noreferrer" target="_blank" style="color: rgb(67, 113, 155);"><strong>joaoh6.costa@gmail.com</strong></a></p><p><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.7);">Observação:</strong><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.7);">&nbsp;Enquanto durar a quarentena, todas as atividades serão home office. Após este período, você tem a opção de permanecer em home office ou vir trabalhar em nosso escritório em Ouro Preto.</span></p><p><br></p>',
      experienceLevel: 'Mid-Level',
      contractType: 'Full-Time',
      languages: ['Portuguese'],
      skills: {
        knowledgeAreas: ['Mobile Application Developer'],
        programmingLanguages: [ 'Kotlin', 'Flutter' ],
        frameworks: [ 'Jetpack', 'Retrofit' ],
        otherSkills: [
          'Graddle',
          'Git',
          'GitFlow',
          'Google Play deployment',
          'Firebase',
          'Code Review',
          'CI/CD',
          'SOLID',
          'Design Patterns',
          'Unit Testing',
          'Clean Architecture',
          'DevOps best practises',
          'Legacy Code',
        ],
      },
    },
    company: {
      name: 'Use Mobile',
      manager: 'João Henrique',
      about:
        'A ouropretana Usemobile nasceu em 2015 com o objetivo de entregar produtos surpreendentes e capazes de impactar a vida de seus usuários. Estamos cumprindo com essa missão mesmo existindo numa cidade do interior, porque aqui descobrimos que a tradição e inovação podem sim andar juntas e que é dessa relação que nascem nossos frutos. \nDentro do #UseTeam existem vários jovens talentos da tecnologia, formando uma equipe multidisciplinar que atende as áreas do design, desenvolvimento, marketing, vendas e serviços administrativos. E não usamos o adjetivo “jovens” à toa, pois a juventude em nossos colaboradores, independente da idade, é o que cria um ambiente dinâmico que estimula o aprendizado, o qual a palavra “time” também significa “amizade”. \nCom muito bom humor e disposição, enfrentamos os mais diversos desafios, e cada dificuldade superada nos trouxe ao lugar que estamos hoje.\nSe você deseja desenvolver este projeto e construir um futuro junto com a Usemobile, confira algumas das oportunidades logo abaixo.',
    },
  }),
};

</script>

<style></style>
