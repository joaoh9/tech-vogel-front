import StorageHelper from '../helpers/storage';
import UserController from '../controllers/user';

const userController = new UserController();

function sidePick(to, from, next) {
  const userInfo = userController.decodeUserToken();

  if (!userInfo) {
    return next({
      name: 'User Login',
    });
  }

  switch (userInfo.side) {
    case 10:
      return next({
        name: 'Resume Form',
      });
    case 11:
      return next({
        name: 'User Dashboard',
      });
    case 20:
      return next({
        name: 'New Company',
      });
    case 21:
    case 22:
      return next({
        name: 'Company Dashboard',
      });
    default:
      return next();
  }
}

function resumeForm(to, from, next) {
  const userInfo = userController.decodeUserToken();

  if (!userInfo) {
    return next({
      name: 'User Login',
    });
  }

  switch (userInfo.side) {
    case 10:
      return next();
    case 11:
      return next({
        name: 'User Dashboard',
      });
    case 20:
      return next({
        name: 'New Company',
      });
    case 21:
    case 22:
      return next({
        name: 'Company Dashboard',
      });
    default:
      return next({
        name: 'Side Pick',
      });
  }
}

function userDashboard(to, from, next) {
  const userInfo = userController.decodeUserToken();

  if (!userInfo) {
    return next({
      name: 'User Login',
    });
  }

  switch (userInfo.side) {
    case 10:
    case 11:
      return next();
    case 20:
      return next({
        name: 'New Company',
      });
    case 21:
    case 22:
      return next({
        name: 'Company Dashboard',
      });
    default:
      return next({
        name: 'Side Pick',
      });
  }
}

function newCompany(to, from, next) {
  const userInfo = userController.decodeUserToken();

  if (!userInfo) {
    return next({
      name: 'User Login',
    });
  }

  switch (userInfo.side) {
    case 10:
      return next({
        name: 'Resume Form',
      });
    case 11:
      return next({
        name: 'User Dashboard',
      });
    case 20:
      return next();
    case 21:
    case 22:
      return next({
        name: 'Company Dashboard',
      });
    default:
      return next({
        name: 'Side Pick',
      });
  }
}

function companyDashboard(to, from, next) {
  const userInfo = userController.decodeUserToken();

  if (!userInfo) {
    return next({
      name: 'User Login',
    });
  }

  switch (userInfo.side) {
    case 10:
      return next({
        name: 'Resume Form',
      });
    case 11:
      return next({
        name: 'User Dashboard',
      });
    case 20:
      return next({
        name: 'New Company',
      });
    case 21:
    case 22:
      return next();
    default:
      return next({
        name: 'Side Pick',
      });
  }
}

function loggedIn(to, from, next) {
  const userInfo = userController.decodeUserToken();

  if (userInfo) {
    return next();
  }

  return next({ name: 'Home' });
}

function unlogged(to, from, next) {
  const userToken = StorageHelper.loadState('userToken');

  if (!userToken) {
    return next();
  }

  const userInfo = userController.decodeUserToken();
  if (!userInfo) {
    return next();
  }

  return next({
    name: 'User Dashboard',
  });
}

function company(to, from, next) {
  const userInfo = userController.decodeUserToken();
  if (!userInfo) {
    return next({
      name: 'User Login',
    });
  }

  if (userInfo.side >= 20 && userInfo.side <= 25) {
    return next();
  }

  return next({
    name: 'User Dashboard',
  });
}

function user(to, from, next) {
  const userInfo = userController.decodeUserToken();
  if (!userInfo) {
    return next({
      name: 'User Login',
    });
  }

  if (userInfo.side >= 10 && userInfo.side <= 15) {
    return next();
  }

  return next({
    name: 'Company Dashboard',
  });
}

function savedCompany(to, from, next) {
  const userInfo = userController.decodeUserToken();
  if (!userInfo) {
    return next({
      name: 'User Login',
    });
  }

  if (userInfo.side === 21 || userInfo.side === 22) {
    return next();
  }

  return next({
    name: 'User Dashboard',
  });
}

function savedUser(to, from, next) {
  const userInfo = userController.decodeUserToken();
  if (!userInfo) {
    return next({
      name: 'User Login',
    });
  }

  if (userInfo.side === 11) {
    return next();
  }

  return next({
    name: 'Company Dashboard',
  });
}

export default {
  sidePick,
  resumeForm,
  userDashboard,
  newCompany,
  companyDashboard,
  unlogged,
  loggedIn,
  company,
  user,
  savedCompany,
  savedUser,
};
