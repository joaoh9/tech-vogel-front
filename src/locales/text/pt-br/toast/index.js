import HashHelper from 'Helpers/hash';
const hashHelper = new HashHelper();

export default {
  toast: {
    error: {
      fileExceeds: 'Arquivo {filename} excede o tamanho limite de {fileSize} MB',
      fileProcessWrong: 'Encontramos um erro com o documento {filename}',
      companyInfo:
        'Não foi possível encontrar as informações da empresa. Certifique-se que sua empresa está registrada.',
      companyInfoLogged:
        'Não foi possível encontrar as informações da empresa.Certifique-se que esta Logged In',
      jobApplying: ' Um erro ocorreu ao candidatar a essa vaga',
      getCompany: 'Algo de errado ocorreu ao obter as informações para a Vaga',
      retrieveJob: 'Um erro ocorreu ao recuperar a vaga do banco de dados',
      retrieveCompany: 'Erro ao recuperar informações do banco de dados',
      retrieveUser: 'Erro ao recuperar informações do usuário.',
      retrieveAppliedJobs: ' Algo de errado ocorreu ao recuperar vagas registradas',
      retrieveCompanyInfo: 'Um erro ocorreu ao recuperar as informações da vaga',
      retrieveUserData: 'Um erro ocorreu ao acessar os dados do usuário',
      companyData: 'Um erro ocorreu ao recuperar as informações da empresa {companyId}',
      jobData: 'Um erro ocorreu ao recuperar as informações da data da  vaga {jobId}',
      saveCompany: 'Um erro ocorreu ao salvar os dados da empresa',
      saveResume: 'Ocorreu um erro ao salvar as informações do seu CV',
      writeNames: 'Favor escreva o nome da empresa e sua descrição',
      saveJob: 'Ocorreu um erro ao salvar a vaga',
      jobList: 'Algo de errado ocorreu ao acessar as vagas do banco de dados',
      registeredCompany: 'Para postar em nossa plataforma você deve realizar o Sign up primeiro',
      githubRetrieve: 'Algo de errado ocorreu ao acessar seus dados do GitHub',
      userOrPassword: 'Favor inserir um e-mail e senha válidos',
      password: 'Algo de errado ocorreu ao atualizar a senha',
      invalidPassword: 'Por favor, verifique as senhas e tente novamente',
      notAllowed: 'Você não possui permissão para acessar esta página',
      loginFailed: 'Algo de errado ocorreu no seu Log in',
      somethingWrong: 'Um erro ocorreu. Tente novamente mais tarde',
      userNotFound: 'Usuário não encontrado',
      fillOut: 'Favor preencher os campos corretamente',
      update: 'Ocorreu um erro ao atualizar os dados',
      requests: {
        '404': 'Informação não encontrada no banco de dados!',
      },
    },
    success: {
      jobApplied: 'Uhuuu! Sucesso na aplicação da vaga!',
      logout: 'Logout realizado com sucesso!',
      savedCompany: 'Empresa salva com sucesso!',
      saveResume: 'Seu currículo foi salvo com sucesso!',
      jobSaved: 'Vaga salva com sucesso!',
      jobEdit: 'Vaga editada com sucesso!',
      githubRetrieve: ' Dados do Github recuperados com sucesso!',
      closeTab: 'Você pode fechar esta página e tentar novamente na próxima pagina!',
      emailConfirmation: 'E-mail confirmado com sucesso!',
      updatedData: 'Dados atualizados com sucesso!',
      passwordUpdated: 'Senha atualizada com sucesso!',
      jobDeleted: 'Vaga deletada com sucesso!',
    },
    info: {
      retrieveUserResume: 'Um erro ocorreu ao recuperar os dados do currículo',
      USER_NOT_CONFIRMED: 'Usuário ainda não confirmado!',
      sessionExpired: 'Sua sessão expirou. Faça Log in novamente.',
      retrieveProfilePicture: 'Erro ao acessar foto de perfil',
      senior: 'Atenção! Posições para Senior podem resultar em menos candidatos!',
      userAlreadyConfirmed: 'Usuário já confirmado!',
      loginToApply: 'Você deve estar logado para se aplicar à vaga!',
      tests: {
        QUESTIONS_REQUIRED: 'Você deve escrever a pergunta!',
        OPTIONS_LENGTH_WRONG: 'Seu teste deve ter de 2 a 10 opções de resposta!',
        AUTHOR_NAME_REQUIRED: 'É necessário estar logado para registrar um teste!',
        QUESTION_TOO_BIG: 'A pergunta ultrapassa o limite máximo de 500 caracteres!',
        TEXT_TOO_BIG: 'Por favor reduza o tamanho da descrição!',
        EMPTY_OPTION: 'Confira se nao existe uma opção vazia!',
        OPTIONS_TOO_BIG: 'Suas opções devem ter no máximo 500 caracteres!',
        OPTION_POINTS_REQUIRED: 'Selecione uma pontuação para todas as opções!',
        OPTIONS_POINT_WRONG: 'A pontuação selecionada deve estar entre -3 e 3!',
        DIFFICULTY_WRONG: 'A dificuldade do teste deve estar entre 1 e 10!',
        TAGS_REQUIRED:
          'Selecione pelo menos uma tag para conseguimos filtrar seu teste para os profissionais!',
        AUTHOR_EMAIL_TOO_BIG: `Contacte um admin. Código de erro: ${hashHelper.errorCode(
          'AUTHOR_EMAIL_TOO_BIG',
          'SQ_',
        )}`,
        AUTHOR_COMPANY_TOO_BIG: `Contacte um admin. Código de erro: ${hashHelper.errorCode(
          'AUTHOR_COMPANY_TOO_BIG',
          'SQ_',
        )}`,
        CREATED_AT_REQUIRED: `Contacte um admin. Código de erro: ${hashHelper.errorCode(
          'CREATED_AT_REQUIRED',
          'SQ_',
        )}`,
        UPDATED_AT_REQUIRED: `Contacte um admin. Código de erro: ${hashHelper.errorCode(
          'UPDATED_AT_REQUIRED',
          'SQ_',
        )}`,
        ANSWER_POINT_REQUIRED: 'Por favor selecione uma resposta!',
      },
      // senior: 'Attention! There might not be that many applications for a senior job',
    },
    warning: {
      confirmationCode: 'Código de confirmação inválido!',
      fillAll: 'Você deve preencher todas as informações pedidas',
      detailedInfo: 'Forneça mais informações sobre sua vaga para gerar interesse nos candidatos',
      emailRegistered: 'E-mail já registrado',
      nameGreater: 'O nome deve obter mais de 3 caracteres',
      emailValidation: 'Ambos e-mails devem ser iguais',
      passwordValidation: 'As senhas devem ser iguais',
      imageFileFormat: 'Apenas formatos .jpeg, .jpg e .png possíveis!',
      wrongPasswordAuth: 'Erro ao validar sua senha atual. Confira se ela está certa!',
    },
    open: {
      login: 'Olá! Login realizado com sucesso!',
    },
  },
};
