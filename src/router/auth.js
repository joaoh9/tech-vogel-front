import UserController from '../controllers/user';

const userController = new UserController();

function requireCompany(to, from, next) {
  const userInfo = userController.decodeUserToken();
  console.log('🚀 ~ file: auth.js ~ line 7 ~ requireCompany ~ userInfo', userInfo);

  if (!userInfo) {
    return next({
      name: 'User Login',
    });
  }

  if (userInfo.side >= 20 && userInfo.side <= 29) {
    return next();
  }

  if (userInfo.side >= 10 && userInfo.side <= 19) {
    return next({
      name: 'User Dashboard',
    });
  }

  return next({
    name: 'Side Pick',
  });
}

function requireProfessional(to, from, next) {
  const userInfo = userController.decodeUserToken();
  console.log('🚀 ~ file: auth.js ~ line 32 ~ requireProfessional ~ userInfo', userInfo)

  if (!userInfo) {
    return next({
      name: 'User Login',
    });
  }

  if (userInfo.side >= 20 && userInfo.side <= 29) {
    return next({
      name: 'Company Dashboard',
    });
  }

  if (userInfo.side >= 10 && userInfo.side <= 19) {
    return next();
  }

  return next({
    name: 'Side Pick',
  });
}

export default {
  requireCompany,
  requireProfessional,
};
