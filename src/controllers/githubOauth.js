import Axios from 'Helpers/axios';
import StorageHelper from 'Helpers/storage';
import UserController from './user';

export default class GithubOauthController {
  async confirmAccess(code) {
    const axios = await Axios.GetInstance();
    const { data } = await axios.get(`/v1/github-signup?code=${code}`);

    return data;
  }

  async getUserInfo() {
    const accessToken = StorageHelper.loadState('access_token');
    if (!accessToken) {
      throw {
        status: 403,
      };
    }
    const axios = await Axios.GetInstance(accessToken);

    const { data } = await axios.get('/v1/github-info');

    return data;
  }

  async getRepoInfo() {
    const accessToken = StorageHelper.loadState('access_token');
    const githubUsername = StorageHelper.loadState('github_username');
    const userController = new UserController();
    const userInfo = userController.decodeUserToken();

    if (!accessToken || !githubUsername) {
      throw {
        status: 403,
      };
    }

    const axios = await Axios.GetInstance(accessToken);

    const { data } = await axios.get(`/v1/repo-info/${userInfo.id}/${githubUsername}`);

    return data;
  }
}
