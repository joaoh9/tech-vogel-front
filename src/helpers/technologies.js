const getLogoFromTechnology = (technology) => {
  const logos = {
    vue: 'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg',
    javascript: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    node: 'https://clipartart.com/images/nodejs-icon-clipart-2.jpg',
    java: 'https://image.flaticon.com/icons/svg/226/226777.svg',
    devops:
      'https://p7.hiclipart.com/preview/464/659/654/devops-computer-icons-agile-software-development-clip-art-others-thumbnail.jpg',
    default: 'https://pngimage.net/wp-content/uploads/2018/05/code-logo-png-1.png',
    frontend: 'https://pngimage.net/wp-content/uploads/2018/05/code-logo-png-1.png',
    cpp:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png',
    react: 'https://cdn.worldvectorlogo.com/logos/react.svg',
    kotlin:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin-logo.svg/1200px-Kotlin-logo.svg.png',
  };

  return logos[technology];
};

const getTextFromTechnology = (technology) => {
  const text = {
    vue: 'Vue.js',
    javascript: 'JavaScript',
    node: 'Node.js',
    python: 'Python',
    java: 'Java',
    c: 'C',
    cpp: 'C++',
    devops: 'DevOps',
    frontend: 'Front End',
    react: 'React',
    kotlin: 'Kotlin',
  };

  return text[technology];
};

export default {
  getLogoFromTechnology,
  getTextFromTechnology,
};
