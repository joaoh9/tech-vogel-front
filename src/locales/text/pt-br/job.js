export default {
  job: {
    new: {
      basicInfo: {
        title: 'Informação básica',
        description:
          'Estas são as informações básicas sobre a vaga que você está abrindo e ficarão visíveis a todos usuários da Tech Vogel.',
      },
      jobTitle: {
        title: 'Título da vaga',
        inputHint: 'Lembre de ser claro e objetivo.',
      },
      id: {
        title: 'Seu link customizado',
        description: 'Este link foi gerado caso você queira divulgar sua vaga',
        inputHint: 'http://techvogel.com/jobs/{company}/{id}',
      },
      experienceLevel: {
        title: 'Nível de experiência',
        inputHint: 'Selecione o nível de experiência que você espera dos aplicantes.',
        label: 'Selecione',
      },
      contractType: {
        title: 'Tipo de contrato',
        inputHint:
          'Esta informação vai permitir que os candidatos saibam o tempo que deverão dedicar ao job.',
        label: 'Selecione',
      },
      aboutTheRole: {
        title: 'Sobre a posição',
        title2: 'Sobre a vaga',
        description:
          'Descreva de um modo cativante qual será o papel do Dev e fale mais sobre o projeto para que o candidato realmente entenda se ele será o fit ideal para a vaga ou não.',
      },
      languages: {
        title: 'Idiomas',
        inputHint: 'Idioma',
      },
      skillRequirements: {
        title: 'Habilidades',
        description:
          'Selecione os requisitos que você está procurando no seu novo candidato. Estas informações ficaram visíveis para todos usuários da Tech Vogel.',
      },
      techSkills: {
        title: 'Habilidades técnicas',
        description:
          'Nesta sessão você pode selecionar as linguagens de programação e frameworks necessários para a vaga. Nós vamos cruzar estas informações com os currículos dos candidatos e selecionar os top matches para seu relatório.',
        inputHint: 'Selecione a habilidade que deseja incluir acima.',
      },
      otherSkills: {
        title: 'Outras habilidades',
        description:
          'Você pode selecionar os soft skills e os idiomas necessários. Também vamos utilizar estas informações para o cruzamento dos CVs dos candidatos para o relatório.',
        inputHint: 'Selecione a habilidade que deseja incluir acima.',
      },
      softSkills: {
        title: 'Soft Skills',
        inputHint: 'Selecione no máximo 10 soft skills desejáveis.',
      },
      language: {
        title: 'Idioma',
        inputHint: 'Selecione os idiomas necessários',
      },
      salaryAndPerks: {
        title: 'Remuneração e benefícios',
        description:
          'Candidatos potenciais querem saber a recompensa da vaga ofertada para que possam candidatar apenas nas vagas que fazem sentido para eles e evite perda de tempo de ambas partes. Esta informação será visível para os Usuários da Tech Vogel.',
      },
      salary: {
        title: 'Remuneração',
      },
      perks: {
        title: 'Benefícios',
        placeholder:
          'Trabalhando na Criptocoin você terá:\n  - Gympass\n  - Vale refeição\n  - Seguro saúde - Vale Coworking \n  - Um time fera para chamar de seu ',
      },
      steppers: [ 'Informações básicas', 'Descrição da vaga', 'Requisitos', 'Salário e benefícios' ],
    },

    details: {
      apply: 'Se candidate para esta vaga!',
      managedBy: 'Vaga gerenciada por {user}',
      aboutTheCompany: 'Sobre a empresa',
    },
    apply: {
      title: 'Você tem certeza que quer se candidatar para esta vaga?',
      subtitle:
        'Se candidatando para esta vaga você utilizará 1 Vogel. Lembrando que você pode receber 1 Vogel a cada Log In feito na Tech Vogel em cada 24h!',
      btnType: 'primary',
      btnText: 'Candidatar a vaga!',
    },
    applicationConfirmed: {
      title: 'Uhuuu você se candidatou com sucesso a vaga!',
      subtitle:
        'Se você tiver um bom match com os requisitos da vaga, você poderá entrar para o nosso relatório e a empresa {companyName} vai entrar em contato para o final do processo de seleção. Fique de olho no seu e-mail e Dashboard!',
      btnType: 'secondary',
      btnText: 'Procurar mais vagas',
      jobType: {
        title: 'Totalmente remota',
      },
    },
    confirmJob: {
      title: 'Revisar as informações da vaga!',
      subtitle:
        'Atenção! Você poderá alterar as informações apenas durante 24h após postar a vaga. Após 24h você poderá apenas excluir a vaga ou deixá-la rodar os 15 dias.',
    },
    posted: 'Postado!',
    seeReport: 'Acessar relatório!',
    timePosted: 'Postado {time}',
    selectAtLeast: 'Favor selecionar no mínimo {min} {skillName}',
    selectMaximum: 'Favor selecionar no máximo {max} {skillName}',
    see: 'Ver vaga >',
    edit: 'Editar vaga',
    list: 'Ver lista de vagas',
  },
};
