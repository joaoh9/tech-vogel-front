import UserController from 'Controllers/user';
import ResumeController from 'Controllers/resume';

const state = {
  skills: [],
};

// faz algum tipo de filtro nos dados do state
const getters = {};

// async operations
const actions = {
  async getCurrentResume() {
    const userController = new UserController();
    try {
      const user = userController.decodeUserToken();
      if (user.side === 11) {
        const resumeController = new ResumeController();
        const data = await resumeController.getCurrentResume();
        this.resume = data;
        this.resume.personalBio = data.personalBio;
        this.currentProfilePic64 = (await userController.getProfilePicture()).profilePicture;
        this.dataUpdated = !this.dataUpdated;
      }
    } catch (e) {
      this.$toast.info(this.$t('toast.info.retrieveUserResume'));
    }
  },
};

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
