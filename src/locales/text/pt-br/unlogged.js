import bigText from './bigText';

export default {
  signup: {
    title: 'Registre-se',
    description: 'Registre-se na Tech Vogel',
    name: {
      title: 'Nome completo',
    },
    email: {
      title: 'E-mail',
    },
    password: {
      title: 'Criar senha',
      description: 'Favor criar uma senha para sua conta',
    },
    confirmPassword: {
      title: 'Um link de confirmação foi enviado para seu e-mail',
      description: 'Um link de confirmação foi enviado para seu e-mail',
    },
    error: {
      errorSavingUser: 'Ocorreu um erro ao salvar o usuário',
    },
    confirmEmail: {
      title: 'Um link de confirmação foi enviado para seu e-mail',
      description: 'Clique no link enviado no seu e-mail para confirmar seu cadastro',
    },
    confirmationCode: {
      title: 'Cole o código recebido na caixa abaixo',
    },
    termsAndConditions: {
      text: 'Eu li e concordo com',
      termsAndConditions: 'Termos e condições',
    },
    resendConfirmationCode: {
      title: 'Não recebeu o link de confirmação? Clique aqui para reenviar',
      success: 'Link de acesso foi enviado para seu e-mail',
      error: 'Foi encontrado um erro ao enviar o e-mail. Favor tentar novamente mais tarde :(.',
      resend: 'Reenviar',
    },
    registrationConfirmed: {
      clickToConfirm: 'Clique no botão para confirmar a conta',
      title: 'Seu e-mail foi confirmado!',
      description: 'Prosseguir para a página principal',
      error: 'Seu código expirou ou é inválido!',
    },
    buttons: {
      createCompany: 'Quero postar uma vaga',
      createCV: 'Quero me candidatar',
    },
  },
  footer: {
    socialMedia: {
      title: 'Nos siga',
      links: [
        {
          text: 'Facebook',
          icon: 'mdi-facebook',
          link: 'https://facebook.com/techvogel',
        },
        {
          text: 'Twitter',
          icon: 'mdi-twitter',
          link: 'https://twitter.com/techvogel',
        },
        {
          text: 'Linkedin',
          icon: 'mdi-linkedin',
          link: 'https://linkedin.com/company/techvogel',
        },
        {
          text: 'Instagram',
          icon: 'mdi-instagram',
          link: 'https://instagram.com/tech_vogel',
        },
      ],
    },
    jobsInfo: [
      {
        text: 'Encontrar vagas',
        to: '/jobs',
      },
      {
        text: 'Postar vaga',
        to: '/jobs/new',
      },
      {
        text: 'Login',
        to: '/login',
      },
    ],
    aboutUsInfo: [
      { text: 'Quem somos', to: '/about-us' },
      { text: 'Como funciona', to: '/how-it-works' },
      { text: 'Valores', to: '/pricing' },
      { text: 'FAQ', to: '/faq' },
      { text: 'Termos de serviço', to: '/terms-of-service' },
      { text: 'Política de privacidade', to: '/privacy-policy' },
    ],
  },
  login: {
    title: 'Entrar',
    subtitle: 'Entrar para a Tech Vogel',
    createAccount: 'Criar nova conta',
    forgotPassword: 'Esqueci minha senha',
    error: 'Informações erradas',
    resendConfirmationCode: 'Não recebi meu código',
  },
  privacyPolicy: {
    title: 'Sua privacidade é importante para nós',
    description: 'Você pode ler mais sobre nossas ações aqui.',
    subtitle: 'Política de privacidade',
    chooseLanguageText: 'Ver política de privacidade em:',
    buttons: [
      'Introdução',
      'Processamento de dados',
      'Compartilhamento e divulgação de dados',
      'Retenção e exclusão de dados',
      'Proteção e armazenamento',
      'Alterações da política',
      'Cookies',
      'Entre em contato',
    ],
    bigText: bigText.privacyPolicy,
  },
  aboutUs: {
    text1:
      'A Tech Vogel foi criada por amantes da liberdade com responsabilidade, nós somos exploradores e ao mesmo tempo apaixonados em empreender.  Esta paixão por novas tendências nos fez visionar o trabalho remoto como sendo um modelo de trabalho promissor e Desenvolvedores como sendo a ponta para que mais empresas possam avançar com suas inovações sem se preocupar com escassez de mão de obra local e qualificada. ',
    text2:
      'Nós chegamos com a visão de conectar Devs com empresas para o trabalho remoto. Queremos ajudar o ambiente inovador permitindo com que empresas possam encontrar cada vez mais desenvolvedores Fits para seus projetos através de nosso Relatório!',
  },
  termsOfService: {
    title: 'Sua privacidade é importante para nós.',
    description: 'Você pode saber mais sobre os passos que tomamos para sua privacidade aqui.',
    subtitle: 'Termos de Serviço',
    chooseLanguageText: 'Ver política de privacidade',
    buttons: [
      'Introdução e informações gerais',
      'Dados do usuário e privacidade',
      'Cadastro',
      'Serviços e custos',
      'Contrato de serviços',
      'Disposições finais',
    ],
    bigText: bigText.termsOfService,
  },
};
