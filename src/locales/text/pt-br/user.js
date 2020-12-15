export default {
  resume: {
    register: {
      important: 'Importante colocar',
      tabs: [
        {
          name: 'Início',
          identifier: 'start',
        },
        {
          name: 'Preferências',
          identifier: 'preferences',
        },
        {
          name: 'Informações pessoais',
          identifier: 'personalInfo',
        },
        {
          name: 'Experiência profissional',
          identifier: 'workExperience',
        },
        {
          name: 'Habilidades',
          identifier: 'skills',
        },
        {
          name: 'Ensino',
          identifier: 'education',
        },
      ],
      start: {
        title: 'Cadastre seu currículo',
        description:
          'Seu currículo na Tech Vogel é a forma como as empresas verão suas informações e como nosso algoritmo vai realizar o match com as vagas aplicadas. Preencha com atenção ;)',
        linkLinkedIn: {
          title: 'Link da sua conta do LinkedIn',
        },
        linkGithub: {
          title: 'Link da sua conta do GitHub',
        },
        registerManually: {
          title: 'Cadastrar currículo',
        },
      },
      preferences: {
        title: 'Selecione suas preferências',
        description: 'Você poderá editar suas informações quando desejar, mesmo após salvar.',
        jobInterests: {
          title: 'Você prefere trabalhar em uma empresa de que porte?',
          options: [ 'Startups', 'Pequena e média', 'Grande' ],
          placeholder: 'Escolha uma categoria',
        },
        jobType: {
          title: 'Qual tipo de Job você está procurando?',
          options: [ 'Tempo integral', 'Meio período', 'Prestador(a) de serviços' ],
        },
      },
      personalInfo: {
        title: 'Bora construir seu perfil',
        description:
          'Você pode editar suas informações depois de salvá-las. Suas informações ficarão visíveis para os usuários da Tech Vogel.',
        fullName: {
          title: 'Nome completo',
        },
        mainRole: {
          title: 'Sua principal posição como desenvolvedor',
          placeholder: 'Ex: Desenvolvedor Junior Full Stack',
        },
        location: {
          title: 'Local de residência',
          city: 'Cidade',
          country: 'País',
        },
        profilePicture: {
          title: 'Foto de perfil',
          placeholder: 'Inserir foto de perfil',
          specifics: 'Tamanho máximo: 200 x 200px\n Formato do arquivo: .jpg ou .png',
        },
        personalBio: {
          title: 'Suas informações profissionais',
        },
      },
      workExperience: {
        title: 'Divida sua experiência profissional',
        description: 'Você poderá alterar suas informações após salvar.',
        company: {
          title: 'Nome da empresa em que atuou',
        },
        position: 'Seu cargo',
        myJob: {
          options: ['Estou nesse emprego atualmente'],
        },
        jobDescription: {
          title: 'Qual era sua função?',
          placeholder: 'Quais são suas maiores conquistas?',
        },
        button: {
          addMore: 'Adicionar mais',
          continue: 'Continuar',
        },
        placeholders: {
          company: {
            title: 'Nome da empresa em que atuou',
          },
          position: 'Ex: DevOps',
        },
      },
      skills: {
        title: 'Fale sobre suas habilidades',
        description:
          'Você pode editar suas informações depois de salvá-las. Suas informações ficarão visíveis para os usuários da Tech Vogel!',
      },
      education: {
        title: 'Ensino',
        description:
          'Você pode editar suas informações depois de salvá-las. Suas informações ficarão visíveis para os usuários da Tech Vogel.',

        school: 'Ensino',
        courseTitle: {
          title: 'Curso',
          placeholder: 'Nome do curso',
          options: [
            'Graduação ensino médio',
            'Graduação ensino superior',
            'Mestrado',
            'MBA',
            'Doutorado',
            'Pós graduação',
            'Pós graduação',
          ],
        },
        degree: {
          title: 'Formação',
          placeholder: 'Ex: Bacharelado',
        },
        about: {
          title: 'Descrição',
          placeholder: 'Qual foi sua função e atuação dentro deste trabalho?',
        },
        fieldOfStudy: 'Campo de estudo',
        institution: 'Instituição',
        from: 'De',
        to: 'Até',
        addMore: 'Adicionar mais',
        continue: 'Continuar',
        placeholders: {
          institution: 'Nome da instituição',
          from: 'De',
          to: 'Até',
        },
      },
      extras: {
        title: 'Fale mais de você!',
        description:
          'Neste campo você poderá colocar mais informações que você acredita que a empresa dos seus sonhos poderia se interessar! Coloque cursos, projetos e certificados que você já realizou também! Você poderá editar estas informações após salvar.',
        button: 'Estou pronto!',
      },
    },
    new: {
      techSkills: {
        inputHint: 'Selecione suas habilidades de acordo com seu domínio e experiência em cada',
      },
    },
    revise: 'Revisar currículo!',
    edit: 'Você poderá editar suas informações após salvar',
    post: 'Postar currículo',
    aboutMe: 'Sobre mim',
    workExperience: 'Experiência de trabalhos',
    education: 'Educação',
    skills: 'Habilidades',
    techSkills: 'Habilidades técnicas',
    softSkills: 'Soft skills',
    langSkills: 'Idiomas',
  },
  user: {
    findMe: 'Onde entrar me encontrar',
    githubSignup: 'Registrar com Github',
    linkedInSignup: 'Registrar com LinkedIn',
    dashboard: {
      greeting: 'Olá,',
      actions: {
        title: 'O que faremos hoje?',
        applications: 'Checar vagas cadastradas',
        findJobs: 'Procurar mais vagas',
        editProfile: 'Editar meu perfil',
        manageCredits: 'Gerenciar Vogels',
      },
      editCV: 'Editar meu currículo',
      registerCV: 'Aplicar meu currículo',
      registerCVNow: 'Registrar meu currículo agora',
      skipStep: 'Pular essa etapa',
      doItLater: 'Fazer mais tarde',
      manageAccount: 'Gerenciar conta',
      manageAccountInfo: 'Gerenciar informações da conta',
      tokenExplanation:
        'Você receberá 1 Vogel por cada Log in que fazer na plataforma em dias diferentes. E toda vez que se candidatar a uma vaga e for selecionado para o relatório você utiliza um Vogel. Caso não seja escolhido para integrar o relatório você permanece com seu Vogel.',
    },
    gotToDashboard: 'Ir para o painel de controle',
    applications: {
      title: 'Suas vagas',
      returnToDashboard: 'Voltar para o painel de controle',
      actions: {
        findJobs: 'Procurar mais vagas',
        editProfile: 'Editar perfil',
        manageCredits: 'Gerenciar Vogels',
        manageAccountInfo: 'Gerenciar informações da conta',
      },
      job: {
        period: 'Aplicado %{count} dias atrás',
      },
      noJobsApplied: {
        title: 'Vish! Você ainda não possui vagas cadastradas!',
        text1:
          'Quando se aventurar e aplicar para as vagas, elas ficarão neste espaço para você checar o status durante o processo da vaga na plataforma.',
        text2: 'Lembre de registrar seu currículo antes de aplicar para as vagas!',
      },
    },
    settings: {
      title: 'Configurações',
      subtitle: 'Gerenciar plano e pagamento.',
      buttons: [
        { text: 'Perfil', icon: 'far fa-user' },
        { text: 'Senha', icon: 'fas fa-lock' },
        { text: 'Pagamento', icon: 'far fa-credit-card' },
      ],
    },
    onboarding: {
      title: 'Bem-vindo(a) à Tech Vogel!',
      description:
        'Bem-vindo(a) à Tech Vogel! Aqui você vai encontrar vagas remotas de acordo com suas habilidades! Nós somos movidos a inovação e satisfação dos nossos usuários, então fique a vontade para nos ajudar com feedbacks! Veja abaixo como a plataforma funciona!',
      skip: 'Pular preview',
      data: [
        {
          title: 'Sobre os 5 vogels',
          subtitle:
            'Vogels são os créditos que você possui para aplicar a uma vaga de sua escolha. A cada Log in por dia você recebe mais vogels para utilizar naquele mesmo dia!',
        },
        {
          title: 'Vagas claras e direto ao ponto',
          subtitle:
            'As empresas da nossa plataforma devem preencher os requisitos das vagas com bastante detalhe para que você e outros Devs possam colocar seus Vogels nas vagas que valem a pena!',
        },
        {
          title: 'Se aplique com apenas dois cliques',
          subtitle:
            'Após registrar seu currículo, você poderá aplicar para as vagas com apenas 2 cliques! Sem forms e mil perguntas!',
        },
        {
          title: 'Sem vácuo no processo seletivo!',
          subtitle:
            'Quando você se candidata através da Tech Vogel, você não vai ficar no vácuo sem resposta. As vagas da plataforma possuem prazo de validade mínimo de 15 dias e você será notificado no mesmo dia de finalização se entrou para o relatório da vaga.',
        },
      ],
    },
    passwordReset: {
      title: 'Resetar senha',
      description: 'Insira seu e-mail para confirmar a mudança de senha',
      confirmationCode: 'Código de confirmação',
    },
    getAccessCode: {
      title: 'Código de acesso',
      description: 'Insira seu e-mail para receber seu código de acesso',
    },
    github: {
      stats: 'Estastísticas do GitHub',
      publicRepo: 'Repositórios públicos',
      contributions: 'Contribuições nos últimos anos',
      forkedRepo: 'Repositórios forcados',
      starsCount: 'Quantidade de estrelas',
      confirmAuth: 'Confirmar autorização do GitHub?',
    },
    skills: 'Habilidades',
    yearsExperience: 'Anos de experiência',
  },
};
